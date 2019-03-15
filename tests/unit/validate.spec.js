import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validate.js'
import {describe} from "mocha";
chai.use(sinonChai)


describe('Validator', () => {
    it('存在.', () => {
        expect(Validator).to.exist
    })
    it('required true 报错',()=>{
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', required: true},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })
    it('required true 通过',()=>{
        let data = {
            email: 0
        }
        let rules = [
            {key: 'email', required: true},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('pattern 报错',()=>{
        let data = {
            email: '@gmail.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.eq('email格式不正确')
    })
    it('pattern 通过',()=>{
        let data = {
            email: '1@gmail.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('pattern email 报错',()=>{
        let data = {
            email: '@gmail.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.eq('email格式不正确')
    })
    it('pattern email 通过',()=>{
        let data = {
            email: '1@gmail.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('require & pattern',()=>{
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    })
    it('pattern & minLength',()=>{
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', minLength: 3},
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    })
    it('many keys',()=>{
        let data = {
            email: '121212121212'
        }
        let rules = [
            {
                key: 'email', pattern: 'email', minLength: 3,
                hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true
            },
        ]
        let validator = new Validator()
        let fn = ()=>{
            validator.validate(data, rules)
        }
        //因为我们没有设置hasNumber规则所以让他抛出一个错误
        expect(fn).to.throw()
    })
    it('自定义测试规则 hasNumber',()=>{
        let data = {
            email: 'abccccccc'
        }
        //对于自定义的校验器直接在Validator的实例中添加就行，这样只会在当前这个
        //实例中有这个校验器
        let validator = new Validator()
        validator.hasNumber= (value)=>{
            if(!/\d/.test(value)){
                return '必须含有数字'
            }
        }
        let rules = [{key: 'email', pattern: 'email', minLength: 3, hasNumber: true},]
        let errors
        let fn = ()=>{
            errors = validator.validate(data, rules)
        }
        expect(fn).to.not.throw()
        //因为我们没有设置hasNumber规则所以让他抛出一个错误
        expect(errors.email.hasNumber).to.eq('必须含有数字')
    })
    it('两个validator之间互相不影响',()=>{
        let data = {
            email: 'abccccccc'
        }
        let validator = new Validator()
        let validator1 = new Validator()
        validator1.hasNumber= (value)=>{
            if(!/\d/.test(value)){
                return '必须含有数字'
            }
        }
        let rules = [{key: 'email', pattern: 'email', minLength: 3, hasNumber: true},]
        expect(()=>{
            validator1.validate(data, rules)
        }).to.not.throw()
        expect(()=>{
            validator.validate(data, rules)
        }).to.throw()
    })
    it('可以全局添加新规则',()=>{
        let data = {
            email: 'abccccccc'
        }
        let validator = new Validator()
        let validator1 = new Validator()
        Validator.add('hasNumber',(value)=>{
            if(!/\d/.test(value)){
                return '必须含有数字'
            }
        })
        let rules = [{key: 'email', pattern: 'email', minLength: 3, hasNumber: true},]
        expect(()=>{
            validator1.validate(data, rules)
        }).to.not.throw()
        expect(()=>{
            validator.validate(data, rules)
        }).to.not.throw()
    })
})

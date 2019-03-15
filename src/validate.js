class Validator {
    constructor(){

    }
    //当我们直接给当前的类添加一个属性方法的时候就得使用static
    //就相当于Validator.add = fn
    static add(name,fn){
        Validator.prototype[name]=fn
    }
    validate(data, rules) {
        let errors = {}
        rules.forEach(rule=>{
            let value = data[rule.key]
            if(rule.required){
                let error = this.required(value)
                if(error){
                    ensureObject(errors, rule.key)
                    errors[rule.key].required = error
                    return
                }
            }
            //遍历validators，并注意调用对应函数
            let validators = Object.keys(rules[0]).filter(v=>v !== 'key' && v !== 'required')
            validators.forEach(item=>{
                if(rule[item]){
                    if(this[item]){
                        let error =  this[item](value,rule[item])
                        if(error){
                            ensureObject(errors, rule.key)
                            errors[rule.key][item] = error
                        }
                    }else{
                        throw `不存在的校验器: ${item}`
                    }

                }
            })
        })
        return errors
    }
    required(value){
        if(!value && value !== 0){
            return '必填'
        }
    }
    pattern(value, pattern){
        if(pattern === 'email'){
            pattern = /^.+@.+$/
        }
        if(pattern.test(value) === false){
            return 'email格式不正确'
        }
    }
    minLength(value,minLength){
        if(value.length < minLength){
            return '太短'
        }
    }
}
export default Validator

function ensureObject(obj, key) {
    if(typeof obj[key] !== 'object'){
        obj[key] = {}
    }
}
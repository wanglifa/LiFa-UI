---
title: Upload 文件上传
---

# 文件上传


<ClientOnly>
<upload-demo-1></upload-demo-1>
<upload-demo-2></upload-demo-2>
</ClientOnly>

## Attributes
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| fileList         | 文件列表数组集合      |  Array |   —  |   —  |
| accept | 上传文件的类型    |  File |   — |     — |
| action | 上传文件的地址   |  String |  — |   — |
| name | 上传文件的文件名   |  String |  — |   — |
| parse-response | 解析上传后的url参数  |  Function |  —|   — |

## Methods
| 参数          | 说明          |   类型  | 可选值  | 默认值  |
| :------------- |:-------------|:-------|:-------|:-------|
| error        | 上传失败事件function(error){}      |  Function |   —  |   —  |




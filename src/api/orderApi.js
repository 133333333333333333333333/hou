// 做网络请求
import request from '../utils/request'

export function getLoginApi(data) {
    return request.post('login', data)
}

export function getOrderListApi(data) {
    return request.get('orders', {
        params: data
    })
}


export function getMenusApi() {
    return request.get('/menus')
}

export function getUsersListApi(data) {
    return request.get('users', {
        params: data
    })
}

export function getUsersStatuChangedApi(id, type) {
    return request.put(`users/${id}/state/${type}`)
}

export function getUsersAdd(user) {
    return request.post('users', user)
}

export function getEditDialog(id) {
    return request.get('users/' + id)
}
export function getEditUserInfo(id, params) {
    return request.put('users/' + id, params)
}
export function getremoveUserById(id) {
    return request.delete('users/' + id)
}
export function getSetRoles() {
    return request.get('roles')
}
export function getSaveRolesInfo(id,params) {
    return request.put(`users/${id}/role`, params)
}
export function getZheXian() {
    return request.get('reports/type/1')
}
export function getRightsListApi() {
    return request.get('rights/list')
}
export function getRolesListApi() {
    return request.get('roles')
}
export function getAddRolesUserApi(data) {
    return request.post('roles', data)
}
export function getRolesDelete(id) {
    return request.delete('roles/' + id)
}
export function getShowEditDialogApi(id) {
    return request.get('roles/' + id)
}
export function getGoodShowEditDialogApi(id,data) {
    return request.get('goods/' + id, {
        params:data
    })
}
export function getEditFormInfoApi(id, params) {
    return request.put(`roles/${id}`,params)
}
export function getRemoveRightIdApi(rId, id) {
    return request.delete(`roles/${rId}/rights/${id}`)
}
export function showeditCateDialogApi(id) {
    return request.get('categories/' +id)
}
export function editCateInfoApi(id, params) {
    return request.put('categories/' + id, params)
}
export function getParentCateListApi(data) {
    return request.get('categories', {
        params: { type: data }
    })
}
export function getAddCateListApi(data) {
    return request.get('categories', {
        params: data
    })
}

export function addCateApi(params) {
    return request.post('categories', params)
}
export function removeCateApi(id) {
    return request.delete('categories/' + id)
}
export function getShowSetRightDialog() {
    return request.get('rights/tree')
}

export function getAllotRightsApi(rolesId, params) {
    return request.post(`roles/${rolesId}/rights`, params)
}

export function showProgressBoxApi() {
    return request.get('/kuaidi/1106975712662')
}

export function editByIdApi(id,params) {
    return request.put('goods/' + id,params)
}
export function removeByIdApi(id) {
    return request.delete('goods/' + id)
}
export function getGoofsListApi(data) {
    return request.get('goods', {
          params: data
        })
}
export function getCateListApi() {
    return request.get('categories')
}
export function addParamsApi(cateId, params) {
    return request.post(`categories/${cateId}/attributes`, params)
}
export function showParamsEditDialog(cateId, id, data) {
    return request.get(`categories/${cateId}/attributes/${id}`, {
        params: data
    })
}
export function getParamsDataApi(cateId,data) {
    return request.get(`categories/${cateId}/attributes`, {
        params: {sel:data}
      })
}
export function editParamsApi(cateId,id,params) {
    return request.put(`categories/${cateId}/attributes/${id}`,params)
}


export function saveAttrValsApi(cateId, id, params) {
    return request.put(`categories/${cateId}/attributes/${id}`, params)
}
export function removeParamsApi(cateId,id) {
    return request.delete(`categories/${cateId}/attributes/${id}`)
}

export function tabClickedApi(cateId,data) {
    return request.get(`categories/${cateId}/attributes`, {
        params: {sel:data}
      })
}
export function addShopApi(params) {
    return request.post('goods', params)
}
export function getListDialog(id) {
    return request.get(`goods/${id}`)
}
export function getListInfo(id,pramas) {
    return request.put(`goods/${id}`,pramas)
}

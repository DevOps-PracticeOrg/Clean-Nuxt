// eslint-disable-next-line no-unused-vars
export default ({ app }, inject) => {
  // eslint-disable-next-line no-unused-vars
  let UserCtrl = function () {
    let $index, $create, $show, $update, $delete

    $index = function (data) {
      let response = app.$UserIndex.execute(data)
      return response
    }

    $create = function (data) {
      let response = app.$UserCreate.execute(data)
      return response
    }

    $show = function (data) {
      let response = app.$UserShow.execute(data)
      return response
    }

    $update = function (data) {
      let response = app.$UserUpdate.execute(data)
      return response
    }

    $delete = function (data) {
      let response = app.$UserDelete.execute(data)
      return response
    }

    return {
      index: $index,
      create: $create,
      show: $show,
      update: $update,
      delete: $delete,
    }
  }

  inject("UserCtrl", UserCtrl)
}

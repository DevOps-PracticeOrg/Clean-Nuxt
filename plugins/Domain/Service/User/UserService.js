import indexImp from "./UserIndex.js"
import service from "../Service.js"
import createImp from "./UserCreate.js"
import showImp from "./UserShow.js"
import updateImp from "./UserUpdate.js"
import deleteImp from "./UserDelete"

// eslint-disable-next-line no-unused-vars
export default function ({ app }, inject) {
  let arrayImp = [indexImp, createImp, showImp, updateImp, deleteImp]
  service.setInject(arrayImp, inject)
}

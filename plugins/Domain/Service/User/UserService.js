/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-disabled-tests */
import _ from "lodash"
import indexImp from "./UserIndex.js"
import service from "../Service.js"
import createImp from "./UserCreate.js"
import showImp from "./UserShow.js"
import updateImp from "./UserUpdate.js"
import deleteImp from "./UserDelete"

export default function ({ app }, inject) {
  let arrayImp = [indexImp, createImp, showImp, updateImp, deleteImp]
  service.setInject(arrayImp, inject)
}

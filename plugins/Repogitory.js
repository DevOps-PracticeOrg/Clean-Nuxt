// eslint-disable-next-line no-unused-vars
export default ({ app }, inject) => {
  inject("testtest", function (string) {
    alert("That was easy!" + string)
  })
}

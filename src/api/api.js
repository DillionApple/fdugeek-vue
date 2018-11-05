let HOST="127.0.0.1:8000"

let ROOT_URL = "http://" + HOST

var APIS = {
  MEDIA_ROOT: ROOT_URL,
  GET_TASK_LIST_URL: ROOT_URL + "/task/list/",
  CREATE_NEW_TASK_URL: ROOT_URL + "/task/new/",
  MODIFY_TASK_URL: ROOT_URL + "/task/change/",
  FINISH_TASK_URL: ROOT_URL + "/task/finish/",
  APPLY_FOR_TASK_URL: ROOT_URL + "/task/apply/",
  GET_TASK_DETAIL_URL: ROOT_URL + "/task/detail/",
  GET_TASK_APPLICATIONS_URL: ROOT_URL + "/task/applications/",
  LOGIN_URL: ROOT_URL + "/account/login/",
  REGISTER_URL: ROOT_URL + "/account/register/",
  CONFIRM_REGISTER_URL: ROOT_URL + "/account/confirm_register/",
  LOGOUT_URL: ROOT_URL + "/account/logout/",
  GET_ACCOUNT_DETAIL_URL: ROOT_URL + "/account/detail/",
  UPLOAD_PICTURE_URL: ROOT_URL + "/picture_bed/upload/",
  CHANGE_ACCOUNT_ICON_URL: ROOT_URL + "/account/change_icon/",
  CHANGE_ACCOUNT_DETAIL_URL: ROOT_URL + "/account/change_detail/",
  CHANGE_PASSWORD_URL: ROOT_URL + "/account/change_password/",
  GET_USER_APPLICATIONS: ROOT_URL + "/task/user/applications/",
  GET_PUBLISHED_TASKS: ROOT_URL + "/task/user/published_tasks/",
  GET_IF_USER_APPLIED_TASK: ROOT_URL + "/task/user/if_applied_task/",
  QUIT_TASK: ROOT_URL + "/task/quit/",
  DELETE_TASK: ROOT_URL + "/task/delete/",
  GET_COMMENT_LIST: ROOT_URL + "/task/comments/",
  MAKE_COMMENT: ROOT_URL + "/task/make_comment/",
}

export default APIS


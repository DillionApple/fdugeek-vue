let DEBUG = true;

var HOST = "";
var ROOT_URL = "";

if (DEBUG) {
  HOST="127.0.0.1:8000"
  ROOT_URL = "http://" + HOST
} else {
  HOST="fdugeek.com";
  ROOT_URL = "https://" + HOST + "/api";
}

var APIS = {
  MEDIA_ROOT: ROOT_URL,
  FEEDBACK_URL: ROOT_URL + "/feedback/",
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
  GET_ACCOUNT_PUBLIC_DETAIL_URL: ROOT_URL + "/account/public_detail/",
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
};

export default APIS


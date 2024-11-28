import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
const dateObj = new Date(date); // 将字符串转换为Date对象
const timeAgo = formatDistanceToNow(dateObj); // 计算从现在到指定日期的时间差

document.body.textContent = `Hello! My name is zky! Happy life. It's been ${timeAgo} since my birth.`;

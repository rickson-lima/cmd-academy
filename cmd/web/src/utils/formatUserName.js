export default function formattedUserName(name) {
  const userName = String(name);
  const splittedStr = userName.split(" ");
  const firstName = splittedStr[0];
  const lastName = splittedStr[splittedStr.length - 1].charAt(0);

  return `${firstName} ${lastName}.`;
}

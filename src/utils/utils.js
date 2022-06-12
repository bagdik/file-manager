export const getUserName = () => {
  return process.argv.slice(2)[0].split('=')[1];
}
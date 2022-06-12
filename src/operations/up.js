import path from 'path';

export const up = (wd) => {
  let parsedWd = wd.trim().split(path.sep);
  if (parsedWd.length > 2) {
    parsedWd = parsedWd
      .slice(0, -1)
      .join(path.sep);
    process.chdir(parsedWd);
    return process.cwd();
  } else {
    return wd;
  }
  
}
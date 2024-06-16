import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const TWITTER = "Twitter";
  const GDEV = "Gdev";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const twitter = `<i class='fa-brands fa-twitter'></i> ${TWITTER}`;
  const gdev = `<i class="fa-brands fa-dev"></i> ${GDEV}`;

  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push(command.aboutGreeting2);
  about.push("<br>");
  about.push("Connect: ");
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += twitter;
  string += SPACE.repeat(17 - TWITTER.length);  
  string += `<a target='_blank' href='https://www.x.com/${command.social.twitter}'>twitter/${command.social.twitter}</a>`;
  about.push(string);
  
  string = '';
  string += SPACE.repeat(2);
  string += gdev;
  string += SPACE.repeat(17 - GDEV.length);  
  string += `<a target='_blank' href='https://developers.google.com/profile/u/${command.social.gdev}'>gdev/${command.social.gdev}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();

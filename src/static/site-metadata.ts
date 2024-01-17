interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'wenqiang的运动生涯',
  siteUrl: 'https://wenqiang.tech/',
  logo: 'https://i.niupic.com/images/2024/01/16/fkev.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://wenqiang.tech/',
    }
  ],
};

export default data;

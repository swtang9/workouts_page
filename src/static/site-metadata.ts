interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};
const data: ISiteMetadataResult = {
  siteTitle: 'Running swtang',
  siteUrl: 'https://running-page-brown.vercel.app',
  logo: 'https://raw.githubusercontent.com/swtang9/running_page/master/public/images/profile.png', //logo设置注意把bold删除，参考 https://github.com/superleeyom/running_page
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    // {
    //   // name: 'Blog',
    //   // url: 'https://shaowutang.com/',
    // },
    {
      name: 'About Me',
      url: 'https://shaowutang.com/',
    },
  ],
};

export default data;

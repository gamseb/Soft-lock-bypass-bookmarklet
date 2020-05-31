javascript: (function () {
  const sites = {
    twitter: {
      url: "https://twitter.com/",
      regex: /https:\/\/twitter.com\/[^/?]*/,
    },
    imgur: {
      url: "https://imgur.com/",
      regex: /https:\/\/imgur.com\/[^/?]*/,
      getBypassLink: () => {
        const id = window.location.href.slice(18);
        const link = `https://i.imgur.com/${id}.jpg`;
        return link;
      }  
    },
  };
    const currentUrl = window.location.href;
    if (sites.imgur.regex.test(currentUrl)){
        url = sites.imgur.getBypassLink();
    }else return;

    window.open(url, "_self", "noopener");



})();
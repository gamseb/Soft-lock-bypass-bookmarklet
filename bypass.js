javascript: (function () {
  const sites = {
    twitter: {
      regex: /https:\/\/(www\.)?twitter.com\/[^/?]*/,
    },
    imgur: {
      regex: /https:\/\/(www\.)?imgur.com\/[^/?]*/,
      getBypassLink: () => {
        const id = window.location.href.slice(18);
        return `https://i.imgur.com/${id}.jpg`;
      },
    },
    youtube: {
      regex: /https:\/\/(www\.)?youtube.com\/[^/?]*/,
      getBypassLink: () => {
        const videoUrl = window.location.href;
        const cleanedVideoUrl = videoUrl.slice(videoUrl.indexOf("youtube"));
        return `https://nsfw${cleanedVideoUrl}`;
      },
    },
  };

  const currentUrl = window.location.href;
  if (sites.imgur.regex.test(currentUrl)) {
    url = sites.imgur.getBypassLink();
  } else if (sites.youtube.regex.test(currentUrl)) {
    url = sites.youtube.getBypassLink();
  } else return;

  window.open(url, "_self", "noopener");
})();

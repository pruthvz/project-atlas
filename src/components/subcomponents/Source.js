// FREE HOSTING WEBSITES FOR YOUR PROJECTS

let hostingSites = [
  {
    name: "Netlify",
    desc:
      "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
    category: "Free Hosting",
    link: "https://www.netlify.com/",
    img:
      "https://pbs.twimg.com/profile_images/1021778918842531840/FBVP_uDf.jpg",
    imgAlt: "Netlify image",
  },
  {
    name: "Firebase",
    desc:
      "Firebase is a mobile- and web application development platform, backed by Google, to help developers deliver richer app experiences.",
    category: "Free Hosting",
    link: "https://firebase.google.com/",
    img:
      "https://www.androidpolice.com/wp-content/uploads/2019/09/firebase.png",
    imgAlt: "Firebase image",
  },
  {
    name: "AWS",
    desc:
      "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.",
    category: "Free Hosting",
    link: "https://aws.amazon.com/",
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA2FBMVEX///+mpqYlLz//mgCjo6P29vb8/Pyvr6+dnZ2goKCsrKypqan/kQD/kgD/mAD/lAC6urrp6ekfKjvd3d3Kysry8vLW1ta1tbXAwMDOzs7j4+MYJDYLGzAAFSsACSTFxcV7gIgTIDMrNUStsLX//PUABySTl543QE5IT1thZ3E/R1QAACL/79f/oST/9+m1uL0AABuBho1vdX6OkplZX2r/4Lj/zI//687/pjP/xoL/2aj/v3L/rET/tVwAABmBhY0AAA7/slL/hwD/5cL/umb/wHb/2qz/yYqbBdXmAAANhUlEQVR4nO1dC3eiPBOuGFAQUUAQUVC02rrVXu29++3bbbf7///Rl6CgAVTCRemePOfsnnpBkiczk5nJJJycUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUHwjcKxsmiqEacoad+zWHBqsrLeMSgnwfNUFz4OS0GzpMnvslh0GmmpUeLfXASBGeMHQtWO3MGfILaEa7j3ORLVmmP+sZsj9UnVn/30eqsAwj93aHMDqUALiEODRUGr9Y0qh9XkCApbgq0352O3ODpoRTwfCwtD+R1hIysC/wwLX2j0P7GfB+O5OgwmI7UCIBV4/di/SgG1W0zKAUK183ylCBanUYA1Q/a6iYOwRApehGoT39y5RaH9Hq6AJOywBQH1vG0a/1YdotQyjLUAudhABwPebIMwd00FNaKMYERtZlpXVTlMQdojCd9MHfYseQAFot9Stcs2anbawTRyq/UP2IDVa0RQASIC8LyaUO+1aNAvV5kEanw2irSEQmmqsoJgzjWid4Nt5tzwzRFNQMwismtyPZIGvfJPMQhQFgIgBBK0vRGjENyEhUgraCXIishFhF76FOnQiKBA6yUZPrURIQvENY9SkmDwXohnhibLwU6QcogDUEgrBEnrYKhTcWWJD/jGoqOl+Um6HSVjKFcdpMoLGFspOhgYNtFOHvVozrF2y3oeOlL9EA0oVo2MWI8BuhcSgmUG4xxkhDmC3A2wDyEetefwFGjNkDDLKg/XDkhAJSITQOSoNXEhxjawUtRWThBJKyVfieeS5wAhoAsiMgviS4N63ClpHyriEpsVmlsNBQgIUBr5/FBZqgdFIPyNsgmuS5SZ5vpPl7eMh4CCCSsa5Ly3sJ+xhoXTodVsuYAxqKV2jMOQdebZoVDPVxv0Iugat7G+hk3JQAuCQohBwkkE7jxEI+0r7RSGHsdiGPs6BkEsiXKuQr9nwuYxGFIKxUk42GdcGsFyhqZV2rUvAzw7kOHYwDkBui0LeBInWaCrNJlqfgf+MZqW2NSMPHejDrM7gd81+TvAgL50Qod1SsYiZ00zdEGoRDCBUD0ECHiyBHLNdfVTIqEf3iVVRzeOxSMDdl1qOE5Lcbu3qD6s3I9dn8ichYBFzTXruszScGckCn7dh1DEO8hSDWFDbYQ5AKecpEpu2wfEXALhOOBGbc7MCqlCErK8cFoV8PUY8YhQKUTDC9UMTZTVPHcVmBWDkeCcShBcmQH4mAU8j5ucfkcIMkpCj3yIXUBVcmMEQKz9twGfGoqgCQoiEUl53whN9RZgVfJiB1FNOOUYNT/3vThxw6hV/d3M36vteGwex+QXs1eZLzZgMbgeTKzJx1gOzA5+DpsrNwMaMXWUirVtlbPccp2fZ1nQpL6ozHCpX/jcmynA4XPfyThkyi+V9bi14Zbfbs8dnExLzHlic4TNft5fboar87aZXPbtwGB/d64n7C2OFUc68r2iWwjC9gf/z1wrTPUd/XVnrSxX7nKCJwZR8NVtB4CL2JYDtCndjwfY7lm3bVhf15XqE3j2HvbY9/dHHqI9+F69shrEA/KP/P8QautS2HIWxSeKfQDaaz9RbVKN259S2m8Rfvd74bDBqdTpXtz3Yc6aHujKBzNieMqAX8H2PkgEc/DHUDK0H37XOr3RV1a9+De1rohiwE9CG7BwlLrr+Tthusu6cO999Ms8gCRYSBBUOvTNYvT11BWTsDdVQWQoFgNT07tZ39v+M11I8uZHdZgitFF2QXds+RJjF16GYd11zB9lQhqtvQGKG6+6a8Ds9ZDUQNUrytqrY3AAqyX8Jg7ytILsWV9J+eF2/gQJvL6UHyoQzGa64QYYQfoJGDdoM5UeK1uJmsZpNNkXdujEhdgXlLRxbB7WmY/sGYWQxtrroMl3W+8qSpoWyMh4JYWKCkI2ftJ2C+FHJL2fVLxaS0b1134Oddrg7hxm7reSgOXBuvO92FylIwAWhlvyHfGylAID4qcQbj4P1cEMbCE1gy2Ys161XoYAs2VCv0dToTBJHPLi3mIEyhCsQlxBqbaO/W864zuR2OoUeb0u+8zlAXoBrEKANhCZQtpjuFL0/Qv7EUrUGyznTPp8kC8xZLHZKPzNoURMCcDdm7LMFo+EY+btdp2f3GM9BgM7hapqEZKBpEVpLBv0S0ozB6sqFvXQRe/bZJEmWHCtiSZ9ZjEpcC/0Ym/W56YXiyrTjdBVmzQEyea5BgC6RpblaYsPhZpED6Qfik56lrGi4uCP3cky8vcTX4wjWXaGdGf1YQzNFAm0x08GvwfSH46w5QEI/5JAAuB6RYbtigfxmZ625Wmlh2a4LxdgL4lazWIo1pUEIVyDGLci+QrGANVqFLOzaJp6Y8JOxigyB6x3JtisWwLMLPuTRdCkNNpmjiIBVLvCp0n2hCsT4BdlIze2NKLm3nvPhR3Dk+/ZK9s8UFElCP2Hj6yuwIwbJgkU8kNiifbq4KVhwE78g20RWfsPZ25CDk7seGnn4v+WKFHQHbJODfbUiJIx1uSTOAmAJpVS5VS2gCSD+xvzO2HeFXKAYwAsQ3ZAZesQrjq6QQMD3lMg8Qd8LqMlajkXQaUKGQD6CpPwOucQbHGhIpFdhgusR2ro/FUI/wbkb9ZYTZggo2or+ZCfwDTHJEylaigpE1PQNXUCpAWbsOSsDGCPc+vrPQYOwgHJiR/qFaBYZkys0NnwpClMMXAyIVlNYd+BXRo69XTp+nn1H8t1dywXynjdCRXax4Rep6Hcc8nHE2s4n9rqDdVdkg3GLRt6amKzWmTA9BblJCuPNlG620M8rjpYMTVYv5YuetSi1TE2TW7/Q5GhPom6wG51svGU9UHdF5q7J9tLnd6wxnAa6Msok2Z5tcxNIvrlQ3a9eeGImQ5OpWLZt9Szbda1IcqoesIxacg5ws0JcaWFcd73M8PhcRnlSp+e1ZXSBOu1ZOo5BQjL0r1xcKOuEtDKeJrFonc3QMXEKIWARydfU9PMLy+lCORi6nb35b+q7OuyPrtId+i8ntuPYG7Z/dG7ZvS6Ktqzxj5DjFAvZcBAouEliWnUwuB0Ab/AxQWKx0xA0TcMHW+7DqHsxHYySurk4B0l1AU/PFmlpNQ4ysQeBUKEwVQYx0cLmhYStx9NHleJUGcSDkYWPVNwqg1jAEgggYQKhX5Aqg9PL2ezylPQqDouZYq+CBIA53PlsT9iLy5fPeaMO0Zi/zoiuxFZeEycUMSIJi47u7xPeFMPsZ0NsSGUXUn1OdC223pa0dI7DZgXCAPz999tjsttu4OG3KIpICMS6SwSRPmClGEmnRjZNDeLpT1H8SSa8Ybz+ebn/eJzNZo9fT1JZmhNxgOdUE2oyFjSSC9Oz2BB/ppeFFS4bZemJ5AI8jZS0KAnngDwh9yJKDfEtE7sA5apcbnySXIDvgxIS3jYtByezeb0sifOHy4QNcHF6/z6HOnVZL9e/SK7DTpEASeuyUuoCxOmrCNVYbPy8J57dV5g9l0Xp9wOcZ8RynYRLGV9zTZpFwuaFhMnpj3Id2vOGWP78IKdh9vBUb0iSiHTguSG9kVyLF+glrkhKNTd6OP0jomkNWgbp5wvBQJ5+PM/raEZsSK5FmUsiiWXBl51TrC5gvyMkXbGbvbkslOGA1p9ev2b75eHy8eFdWvpGkvjqfv+xLhF5SLhFrCYPeTFfOcWWpfu56Pl6DbFefvvz9bhFIk5nHw+fT42VSwQZ8Byt5wahGOCqkDzkxZfZ0tT03D95LCB5aNTFRvnp/c/Dyxd0gRA+7r9e/r6+zSX4iecbQyvy9rG6/rTceCe5H16gmGaPCb7inK6M4ePNd/xXTEAq6uIaddh5af0Nqd7YcLDgrEBiUgOFqml2OuIp1bSBI5rmMBq2A6oM7lW8SUQ+RmBlKKmD5AL7pfQb208/PqX9NEj1+vw54GPfE1EQODgihUU8CfCZyRkPcMpzTV40EchSSG8PKUOt4AEi6Qrz8JK8HcXZRLj8+Ps+ryMLIPlowN6LjafPh8ekHqUPNnCQTDoxCBz6kulhH5eP9y/Pn+9vT0/zp6e399e/L/cxPIc4CJweAlJZg5OQcTnC8UPECB4slXr7e6A480g5RRIET1nLYINjLfCDhTq5MQKh48Uy2MgTPCq12OeacmEKMrDjocq8IpuE8Omb2Wz11YPngRVqQyeG8BbXrLZ8B3+2dsBTqEjAtsJl1VkdiZLbYaHZIuowkOwOJA4fYpjkEPF8EX1EeXYGnA1rWa1Qz1XjzCgGsj2lPaJwvVQ57lG2G9C2HI+U8UH1EU/YACXB2P54kYNB1ptbjsnis9rT6KEdubuzJhi6qrHHgSbrHaOy9ZjNHB5XEPVoiKU01ITKMSCUhO2n5uXzFBduyxNjCop8zkX6TiSAlFmT7SRUUj+M70Dgd2xCT4tsnseXO/J9ZEfUU1eKBj5RQTEB5C0nIBQGhzhsnOsnf0xr/jjUI1DlSlFZ4KvNg7nvplBAFg7++AWzTfL07vwBqnz78I/h0Dr7HmN/KAC+Ctr6kYI3GLKWqlX+aEwA9FAevtbu7H02ZK5wD7pGj+A8ONCp20ZHlY8fvK/AHQHH7jMFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXFJv4PKLoFAx46n28AAAAASUVORK5CYII=",
    imgAlt: "AWS image",
  },
  {
    name: "Heroku",
    desc:
      "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
    category: "Free Hosting",
    link: "https://www.heroku.com/",
    img: "https://pbs.twimg.com/profile_images/689518720998252544/mOobZd_8.png",
    imgAlt: "Heroku image",
  },
  {
    name: "Github Pages",
    desc:
      "Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.",
    category: "Free Hosting",
    link: "https://pages.github.com/",
    img: "https://i.ytimg.com/vi/2MsN8gpT6jY/maxresdefault.jpg",
    imgAlt: "Github pages image",
  },
  {
    name: "Vercel",
    desc:
      "Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.",
    category: "Free Hosting",
    link: "https://vercel.com/",
    img: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
    imgAlt: "Vercel image",
  },
  {
    name: "Surge",
    desc:
      "Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.",
    category: "Free Hosting",
    link: "https://surge.sh/",
    img:
      "https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/How_to_deploy_static_sites_with_Surge.png",
    imgAlt: "Surge image",
  },
  {
    name: "Render",
    desc:
      "Render is a modern cloud provider that makes it effortless and instant to deploy your code in production.",
    category: "Free Hosting",
    link: "https://render.com/docs",
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9G47c84rQt4bGY7dKQ7NCi79ju/fg44rP3/vz6/v3p/PbC9OSI685Q5Lp76cjO9+pY5b3e+fF96srW+O299OLI9ecE36ux8t6V7dGp8Np96sln58K48+Dq/PZW5bxw6MT//bazAAADVElEQVR4nO3d2WKqMBRAUUXUOBactbb6/195ex9jDyohwwnd6zlidlEQsDIYAAAAAAAAAAAAAPpMN9X+dJm8bWM9eimOmVtjSmnIMkbbrLp81uZH0cJoby1jKz3Y2IUjacgqeN5mUv9PG7Zl7D/+SlpC8VAoDRmHzVtM1qZ9XD6Fy6trXh6FX2vjnJdD4X7YqU994a7u2Ke8cPYpPVePCg8O+4asCsceVqDmwmntYwUqLtx56lNbeOi8CVVeuPfzFtRbePIYqLLQ5xpUWXjwGqiwcOdvI6OzcOptN6G1sPYcqK5w/M4qLArzvsfzNCOJXXiUhng6T/N6K/MTV69O1WbxvXjTzM/U/Ji9WIOFKcaHaepZdrF9XmiuUU5aBrR7+ho1183rRSh3e/YCXVepp9fd6cm+3pSpZ+fDszXYgxX4bBUWN1VbfGfrxsDr/PWjM9B4WF/Uqafmyb1hX1jc+rEGB9+Nq7Af78HBYNKwCs0u9cx8aThqMpPUE/Nl0fAiTbKVKda/Dc8dF3qRX6QmyUfRIEfAV3kr8+Flxm2FKGw4MEyzCoMUNpxgu/uYb3shCuW3oUn0eTtEYcPBvZ8JtxaiUNwbFqmOCUMUim/DZB9nAhTKH0qLVB+5AxTKm9Krpwm3FqBQPDZM9jYMUfglXkzYv35gGAEKxd1huuOmAIXiwaFZeJpwa9EKk12goNABhZFR6EBbofTfCL0qvH8ILp0WqawwAArzR2H+KMwfhfmjMH8U5k9Z4aESdLuUqazwKH2Zutu3oJUV/oFjfArbozAyCh1QGBmFDiiMjEIHFEZGoQMKI6PQAYWR9f88zX4p6PYtO2WFAVCYPwrzR2H+KMwfhfmjMH/KCrcrwanTIpUV9v973v0/xqfQAYWRUeiAwsgodEBhZBQ6oDAyCh1QGBmFDsTCUa8KpVv2JSz0f55mPpN4mm974mx68juxAAAAQK+V0k2yjvYYI42xf8S1km62dVRxzy75CNgeI97C5G4NEX/KVsd91yikkEIKKaSQQgoppJBCCimkkMKeFIpXue0xQ+nSs11YSZenRw+F0lM9FkpP1e08zeFc/vbwRxNGlKX9U/CbsTDkbP+b+Zf0VKVdKC4m2V1vAAAAAAAAAAAA8Nf8A62bU+Ir9PAEAAAAAElFTkSuQmCC",
    imgAlt: "Render image",
  },
  {
    name: "Gitlab Pages",
    desc:
      "How it works. To use GitLab Pages, you must create a project in GitLab to upload your website's files to.",
    category: "Free Hosting",
    link: "https://docs.gitlab.com/ee/user/project/pages/",
    img: "https://i.ytimg.com/vi/TWqh9MtT4Bg/maxresdefault.jpg",
    imgAlt: "Gitlab Pages image",
  },
  {
    name: "Stormkit",
    desc:
      "Stormkit integrates perfectly with your git flow. It builds, deploys and scales your javascript apps seamlessly.",
    category: "Free Hosting",
    link: "https://www.stormkit.io/",
    img:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OSIgaGVpZ2h0PSI2OSIgdmlld0JveD0iMCAwIDY5IDY5Ij4KICA8ZyBpZD0iR3JvdXBfMiIgZGF0YS1uYW1lPSJHcm91cCAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM5IC0zNykiPgogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgY3g9IjM0LjUiIGN5PSIzNC41IiByPSIzNC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzkgMzcpIiBmaWxsPSIjMWYxYzNiIi8+CiAgICA8ZyBpZD0iR3JvdXBfMSIgZGF0YS1uYW1lPSJHcm91cCAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNCAtNykiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSI2LjY0OCIgaGVpZ2h0PSIyNC45MjgiIHJ4PSIzLjMyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg0LjAyOCA3OS4yMjcpIHJvdGF0ZSgzMCkiIGZpbGw9IiNmNjAwNWIiLz4KICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8zIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzIiB3aWR0aD0iNi42NDgiIGhlaWdodD0iOC4zMDkiIHJ4PSIzLjMyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc2LjY0MyA3NS41MTQpIHJvdGF0ZSgzMCkiIGZpbGw9IiNmNjAwNWIiLz4KICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV80IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA0IiB3aWR0aD0iNi42NDgiIGhlaWdodD0iMjQuOTI4IiByeD0iMy4zMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3OC40OSA1NS44NzYpIHJvdGF0ZSgzMCkiIGZpbGw9IiNmNjAwNWIiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
    imgAlt: "Stormkit image",
  },
];

const codeSnippets = [
  {
    name: "Codepen",
    desc:
      "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work.",
    category: "Snippets",
    link: "https://codepen.io/",
    img:
      "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Large.png",
    imgAlt: "Codepen  image",
  },
  {
    name: "Codesandbox",
    desc:
      "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.",
    category: "Snippets",
    link: "https://codesandbox.io/",
    img:
      "https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png",
    imgAlt: "Codesandbox  image",
  },
  {
    name: "CSS-Tricks",
    desc:
      "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
    category: "Snippets",
    link: "https://css-tricks.com/",
    img:
      "https://pbs.twimg.com/profile_images/1080202898372362240/akqRGyta_400x400.jpg",
    imgAlt: "CSS-Tricks  image",
  },
  {
    name: "GitHub",
    desc:
      "GitHub is where over 56 million developers shape the future of software, together.",
    category: "Snippets",
    link: "https://github.com/",
    img:
      "https://www.techcentral.ie/wp-content/uploads/2019/11/GitHub-Mark.png",
    imgAlt: "GitHub image",
  },
  {
    name: "W3 Schools",
    desc:
      "SQL · Python · PHP · jQuery · Java · Code Game · W3.CSS · Color Picker · Bootstrap.",
    category: "Snippets",
    link: "https://www.w3schools.com/",
    img:
      "https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?mode=scale&q=90&h=200&w=200&background=white",
    imgAlt: "W3 Schools image",
  },
  {
    name: "Bootsnipp",
    desc:
      "Bootsnipp is an element gallery for web designers and web developers, anybody using Bootstrap will find this website essential in their craft.",
    category: "Snippets",
    link: "https://bootsnipp.com/",
    img: "https://bootsnipp.com/img/logo.jpg",
    imgAlt: "Bootsnipp image",
  },
  {
    name: "Stackoverflow",
    desc:
      "Stack Overflow is a question and answer site for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming.",
    category: "Snippets",
    link: "https://stackoverflow.com/",
    img:
      "https://www.accountingfly.com/wp-content/uploads/2019/03/stackoverflow.com-300.jpg",
    imgAlt: "Stackoverflow image",
  },
  {
    name: "CreativesFeed",
    desc:
      "CreativesFeed is a single resource for designers and creatives. CreativesFeed offers blog articles, inspiration, and freebies for web designers, graphic designers.",
    category: "Snippets",
    link: "https://creativesfeed.com/",
    img: "https://pbs.twimg.com/profile_images/970875789917945857/Hk8Cqxca.jpg",
    imgAlt: "CreativesFeed image",
  },
  {
    name: "Tweetsnippet",
    desc: "Tweetsnippet is a curated list of tips and tricks from Twitter.",
    category: "Snippets",
    link: "https://tweetsnippet.com/",
    img:
      "https://www.webdesignerdepot.com/cdn-origin/uploads/2017/07/tweetsnippet.jpg",
    imgAlt: "Tweetsnippet image",
  },
  {
    name: "EnjoyCSS",
    desc:
      "EnjoyCSS is an advanced CSS3 generator that saves your time. Its handy and simple UI allows you to adjust rich graphical styles quickly and without coding.",
    category: "Snippets",
    link: "https://enjoycss.com/",
    img:
      "https://pbs.twimg.com/profile_images/433667286558195712/arz9uI_g_400x400.png",
    imgAlt: "EnjoyCSS image",
  },
];

const interviewSites = [
  {
    name: "CodeChef",
    desc:
      "CodeChef is a competitive programming community of programmers from across the globe.",
    category: "Interview Prep",
    link: "https://www.codechef.com/",
    img:
      "https://yt3.ggpht.com/ytc/AAUvwnhAFZgqXiTg3WS7ZFI6byv7sBAVxE9j8T6Cioa8rw4=s900-c-k-c0x00ffffff-no-rj",
    imgAlt: "CodeChef logo",
  },
  {
    name: "HackerEarth",
    desc:
      "Accurately assess, interview, and remotely hire developers for all roles. Trusted by 1000+ recruiters.",
    category: "Interview Prep",
    link: "https://www.hackerearth.com/",
    img: "https://paganresearch.io/images/Hackerearth.jpg",
    imgAlt: "HackerEarth logo",
  },
  {
    name: "LeetCode",
    desc:
      "At LeetCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies.",
    category: "Interview Prep",
    link: "https://leetcode.com/  ",
    img: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    imgAlt: "LeetCode image",
  },
  {
    name: "HackerRank",
    desc:
      "HackerRank is the market-leading technical assessment and remote interview solution for hiring developers. ",
    category: "Interview Prep",
    link: "https://www.hackerrank.com/",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    imgAlt: "HackerRank image",
  },
  {
    name: "AlgoExpert",
    desc:
      "Master the essential algorithms and data structures that are tested in coding interviews. Join the 50,000+ software developers who've used our platform to land their dream jobs.",
    category: "Interview Prep",
    link: "https://www.algoexpert.io/product",
    img:
      "data:image/png;base64,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",
    imgAlt: "AlgoExpert image",
  },
  {
    name: "Coderbyte",
    desc:
      "Coderbyte is the #1 website for technical interview prep and coding challenges · Algorithm → · React → · MYSQL",
    category: "Interview Prep",
    link: "https://coderbyte.com/",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--aOxxf45v--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1155/daee822c-2c89-4fd4-98f3-b58afb56bbef.jpg",
    imgAlt: "Coderbyte image",
  },
  {
    name: "GeeksForGeeks",
    desc:
      "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and more.",
    category: "Interview Prep",
    link: "https://www.geeksforgeeks.org/",
    img:
      "https://pbs.twimg.com/profile_images/1304985167476523008/QNHrwL2q.jpg",
    imgAlt: "GeeksForGeeks image",
  },
  {
    name: "glassdoor",
    desc:
      "Free company interview questions and reviews for 1616000 companies. All posted anonymously by employees.",
    category: "Interview Prep",
    link: "https://www.glassdoor.co.uk/index.htm",
    img:
      "https://media.glassdoor.com/sqll/100431/glassdoor-squareLogo-1611255532304.png",
    imgAlt: "glassdoor image",
  },
];

const sourceExpo = {
  hostingSites,
  codeSnippets,
  interviewSites,
};
export default sourceExpo;

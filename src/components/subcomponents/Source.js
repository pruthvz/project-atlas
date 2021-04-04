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

export default hostingSites;

// components imports
import LinkBtn from "@/components/actionControl/link/linkButton";
import BlobMania from "@/components/logomark/blobMania";
import ClientDate from "@/components/localDate/localDate";
import { github, instagram, telegram } from "@/components/logomark/social";

import { forwardRef } from "react";

const socialMedia = [
  { name: "telegram", url: "/", icon: telegram() },
  { name: "instagram", url: "/", icon: instagram() },
  { name: "github", url: "/", icon: github() },
];

function Footer(props, ref) {
  return (
    <footer ref={ref}>
      <div className="footer-main">
        <div className="wrapper">
          <div>
            <div>
              <LinkBtn href={"/"}>
                <figure className="logomark">
                  <BlobMania type="icon" />
                  <BlobMania type="text" />
                </figure>
              </LinkBtn>
              <span className="footer-slogan">
                Comic database <br />
                that wrapped by hobbie.
              </span>
              <LinkBtn name={"Contact Author"} href={"/"} />
            </div>
          </div>
          <div>
            <div>
              <div className="get-notification">
                <span className="email-offers">
                  Receive email about <br /> new comics or updated
                </span>
                <input type="email" placeholder="email address" />
                <input type="submit" name="" value="Send" />
              </div>
              <div className="media_social">
                {socialMedia.map((media) => {
                  return (
                    <LinkBtn href={media.url} key={media.name}>
                      {media.icon}
                    </LinkBtn>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-extended">
        copyright &copy;blobmania
        <ClientDate />. Made with ❤️ by
        <LinkBtn name={"yeagram"} href={"/"} />. Read Terms of use.
      </div>
    </footer>
  );
}
export default forwardRef(Footer);

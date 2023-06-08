// libray imports
import Script from "next/script";

// data imports
import { socialsData } from "@/data/socialsData";

// components imports
import LinkBtn from "@/components/actionControl/link/linkButton";
import BlobMania from "@/components/logomark/blobMania";
import MediaSocialIcon from "@/components/logomark/social";

export default function Footer() {
  return (
    <>
      <Script id="time">{`
        document.getElementById("copyDate").innerHTML = new Date().getFullYear().toString();      
      `}</Script>

      <footer>
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
                  {socialsData.map((social) => {
                    return (
                      <LinkBtn href={social.url} key={social.name}>
                        <MediaSocialIcon name={social.name} />
                      </LinkBtn>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-extended">
          copyright &copy;blobmania <span id="copyDate"></span>. Made with ❤️ by
          <LinkBtn name={"yeagram"} href={"/"} />. Read Terms of use.
        </div>
      </footer>
    </>
  );
}

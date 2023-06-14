// layouts import
import MainLayout from "@/layout/mainLayout";

// fonts definitions

export default function About() {
  return (
    <>
      <MainLayout title={"About"}>
        <div className="about-page">
          <h1>About</h1>
          <p>
            The BlobMania is Comic Database website that allows you to explore
            and read a comics.
          </p>

          <section>
            <h2>Blobmania Content</h2>

            <div>
              <h3>Feature</h3>
              <div>
                <p>Search and explore comic.</p>
                <p>
                  Automaticly save you recently readed comic to localstorage.
                </p>
              </div>
            </div>

            <div>
              <h3>Disclaimer</h3>
              <p>
                All content on this page is collected from the{" "}
                <a
                  href="https://bato.to"
                  target="_blank"
                  title="wrapped from this page"
                >
                  bato.to
                </a>{" "}
                website.
              </p>
              <p>
                It is important to note that this site is not intended for
                commercial purposes.
              </p>
              <p>The main purpose of this page is for training and learning.</p>
              <p>
                The search results may not be relevant to your search because
                the data on the{" "}
                <a
                  href="https://bato.to"
                  target="_blank"
                  title="wrapped from this page"
                >
                  bato.to
                </a>{" "}
                site comes from the page uploader. Because the uploader can be
                anyone, thats one reason.
              </p>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}

// layout imports
import SelectLayout from "@/layout/SelectLayout";

// components imports
import Checkbox from "@/components/forms/checkbox/";
import Radio from "@/components/forms/radio/";

// data imports
import { comicProps } from "@/data/batoto_property";

export function ContentFilter() {
  return (
    <div className="advance-search-filter" aria-label="advance_search_filter">
      {/* contentType */}
      <SelectLayout title={comicProps.contentType.name}>
        <Radio
          name={"test"}
          options={comicProps.contentType.filters}
          dataType="genre"
        />
      </SelectLayout>

      {/* genres */}
      <SelectLayout title={comicProps.genres.name}>
        {comicProps.genres.filters.map((genre, i) => {
          return (
            <SelectLayout
              key={`${i}-genre`}
              title={genre.name}
              layout="subgenres"
            >
              <Checkbox
                name={"test"}
                options={genre.filters}
                dataType="genre"
              />
            </SelectLayout>
          );
        })}
      </SelectLayout>

      {/* sort */}
      <SelectLayout title={comicProps.orders.name}>
        <Radio
          name={"test"}
          options={comicProps.orders.filters}
          dataType="order"
        />
      </SelectLayout>

      {/* status */}
      <SelectLayout title={comicProps.status.name}>
        <Radio
          name={"test"}
          options={comicProps.status.filters}
          dataType="status"
        />
      </SelectLayout>

      {/* translated Language */}
      <SelectLayout title={comicProps.translatedLanguage.name}>
        <Radio
          name={"test"}
          options={comicProps.translatedLanguage.filters}
          dataType="tlLang"
        />
      </SelectLayout>
    </div>
  );
}

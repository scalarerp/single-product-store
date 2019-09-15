import React, { useState, FunctionComponent } from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import RadioButton from "./atoms/RadioButton";
import ImageRadioButton from "./atoms/ImageRadioButton";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import SettingsSvg from "../images/settings.svg";
import { allVariations } from "./themes/variations";
import { Store } from "./containers/store";
import { dispatch } from "rxjs/internal/observable/range";

enum Theme {
  one = "one",
  two = "two",
  three = "three",
  mixAndMatch = "mixAndMatch"
}

const themes = [Theme.one, Theme.two, Theme.three, Theme.mixAndMatch];

export default function Config() {
  const [selectedTheme, selectTheme] = useState(null);

  return (
    <StaticQuery
      query={query}
      render={({ storeMockup }) => {
        const themeRepresentationComponent = {
          one: () => (
            <Img
              className="rounded-sm"
              draggable={false}
              fixed={storeMockup.childImageSharp.fixed}
            />
          ),
          two: () => (
            <Img
              className="rounded-sm"
              draggable={false}
              fixed={storeMockup.childImageSharp.fixed}
            />
          ),
          three: () => (
            <Img
              className="rounded-sm"
              draggable={false}
              fixed={storeMockup.childImageSharp.fixed}
            />
          ),
          [Theme.mixAndMatch]: () => (
            <>
              <div className="absolute inset-0 bg-black opacity-25 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <SettingsSvg></SettingsSvg>
              </div>
              <Img
                className="rounded-sm"
                draggable={false}
                fixed={storeMockup.childImageSharp.fixed}
              />
            </>
          )
        };

        return (
          <GradientBox>
            <>
              <div className="px-4 pb-3">
                <h2 className="text-white font-bold text-sm leading-loose">
                  Theme
                </h2>
                <div className="flex justify-between -ml-1">
                  {themes.map(theme => (
                    <ImageRadioButton
                      key={theme}
                      name="theme"
                      value={theme}
                      selectedValue={selectedTheme}
                      onSelect={selectTheme}
                    >
                      {themeRepresentationComponent[theme]()}
                    </ImageRadioButton>
                  ))}
                </div>
              </div>
              {selectedTheme === Theme.mixAndMatch && (
                <MixAndMatchOptions></MixAndMatchOptions>
              )}
            </>
          </GradientBox>
        );
      }}
    />
  );
}

const MixAndMatchOptions: FunctionComponent = () => {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);

  return (
    <TwoColOverlay>
      <TwoColRow title="" content={<></>} />
      {allVariations.map(({ name, key, variations }) => (
        <TwoColRow
          key={key}
          title={name}
          content={
            <>
              {variations.map(variation => (
                <RadioButton
                  className="mr-1"
                  name={key}
                  value={variation}
                  checked={state.selectedVariations[key] === variation}
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_VARIATION",
                      payload: { key, variation }
                    })
                  }
                />
              ))}
            </>
          }
        />
      ))}
    </TwoColOverlay>
  );
};

const query = graphql`
  query ConfigQuery {
    storeMockup: file(relativePath: { eq: "store-mockup.png" }) {
      childImageSharp {
        fixed(width: 67) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

import { useState } from "react";
import draftToHtml from "draftjs-to-html";

const BODY = {
  "blocks": [
    {
      "key": "p0t6",
      "text": "Hello",
      "type": "header-one",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {
        "text-align": "start"
      }
    },
    {
      "key": "6rrel",
      "text": "Raised without antibiotics and full of flavor, this beef is the base of big, juicy burgers, savory meat loaf and rich Bolognese sauce. You can enjoy this delicious local ground beef for your meatloaf, burgers, meatballs, shepherd’s pie, spicy taco meat and so much more.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 270,
          "style": "color-rgb(102,102,102)"
        },
        {
          "offset": 0,
          "length": 270,
          "style": "bgcolor-rgb(255,255,255)"
        },
        {
          "offset": 0,
          "length": 270,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 270,
          "style": "fontfamily-muli, sans-serif"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "f4rt5",
      "text": "As one of Farmart’s premium beef suppliers, Local Angus works with a coalition of small family farms throughout the Mid-Atlantic region* who feed their cattle a diet of primarily grass, supplemented by grain throughout the finishing months. Every farm in this program is independently audited for animal welfare practices to ensure the best standards of care. ",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 43,
          "style": "color-rgb(102,102,102)"
        },
        {
          "offset": 44,
          "length": 11,
          "style": "color-rgb(102,102,102)"
        },
        {
          "offset": 56,
          "length": 303,
          "style": "color-rgb(102,102,102)"
        },
        {
          "offset": 0,
          "length": 43,
          "style": "bgcolor-rgb(255,255,255)"
        },
        {
          "offset": 44,
          "length": 11,
          "style": "bgcolor-rgb(255,255,255)"
        },
        {
          "offset": 56,
          "length": 303,
          "style": "bgcolor-rgb(255,255,255)"
        },
        {
          "offset": 0,
          "length": 43,
          "style": "fontsize-14"
        },
        {
          "offset": 44,
          "length": 11,
          "style": "fontsize-14"
        },
        {
          "offset": 56,
          "length": 303,
          "style": "fontsize-14"
        },
        {
          "offset": 0,
          "length": 43,
          "style": "fontfamily-muli, sans-serif"
        },
        {
          "offset": 44,
          "length": 11,
          "style": "fontfamily-muli, sans-serif"
        },
        {
          "offset": 56,
          "length": 303,
          "style": "fontfamily-muli, sans-serif"
        },
        {
          "offset": 44,
          "length": 11,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {
        "text-align": "start"
      }
    }
  ],
  "entityMap": {}
}

const Description = () => {
  const [local, setLocal] = useState(draftToHtml(BODY));

  return (
    <div className="prose prose-sm max-w-none">
      <div className="preview" dangerouslySetInnerHTML={{ __html: local }} />
    </div>
  )
}

export default Description
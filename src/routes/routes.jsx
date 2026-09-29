import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Tools from "../pages/Tools.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsOfUse from "../pages/TermsOfUse.jsx";
import CookiePolicy from "../pages/CookiePolicy.jsx";
import NotFound from "../pages/404.jsx";

// Tools
import JsonFormatter from "../pages/tools/JsonFormatter.jsx";
import JsonValidator from "../pages/tools/JsonValidator.jsx";
import Base64Encoder from "../pages/tools/Base64Encoder.jsx";
import Base64Decoder from "../pages/tools/Base64Decoder.jsx";
import UrlEncoder from "../pages/tools/UrlEncoder.jsx";
import UrlDecoder from "../pages/tools/UrlDecoder.jsx";
import HtmlEncoder from "../pages/tools/HtmlEncoder.jsx";
import HtmlFormatter from "../pages/tools/HtmlFormatter.jsx";
import TextCaseConverter from "../pages/tools/TextCaseConverter.jsx";
import WordCounter from "../pages/tools/WordCounter.jsx";
import SlugGenerator from "../pages/tools/SlugGenerator.jsx";
import UUIDGenerator from "../pages/tools/UUIDGenerator.jsx";
import TimestampConverter from "../pages/tools/TimestampConverter.jsx";
import ColorConverter from "../pages/tools/ColorConverter.jsx";
import RegexTester from "../pages/tools/RegexTester.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },

      {
        path: "contact",
        Component: Contact,
      },

      {
        path: "tools",
        Component: Tools,
      },

      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },

      {
        path: "terms-of-use",
        Component: TermsOfUse,
      },

      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },

      // Developer Tools
      {
        path: "tools/json-formatter",
        Component: JsonFormatter,
      },

      {
        path: "tools/json-validator",
        Component: JsonValidator,
      },

      {
        path: "tools/base64-encoder",
        Component: Base64Encoder,
      },

      {
        path: "tools/base64-decoder",
        Component: Base64Decoder,
      },

      {
        path: "tools/url-encoder",
        Component: UrlEncoder,
      },

      {
        path: "tools/url-decoder",
        Component: UrlDecoder,
      },

      {
        path: "tools/html-encoder",
        Component: HtmlEncoder,
      },

      {
        path: "tools/html-formatter",
        Component: HtmlFormatter,
      },

      {
        path: "tools/text-case-converter",
        Component: TextCaseConverter,
      },

      {
        path: "tools/word-counter",
        Component: WordCounter,
      },

      {
        path: "tools/slug-generator",
        Component: SlugGenerator,
      },

      {
        path: "tools/uuid-generator",
        Component: UUIDGenerator,
      },

      {
        path: "tools/timestamp-converter",
        Component: TimestampConverter,
      },

      {
        path: "tools/color-converter",
        Component: ColorConverter,
      },

      {
        path: "tools/regex-tester",
        Component: RegexTester,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

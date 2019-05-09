import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import HomePage from "./pages/HomePage";
import AutoLinkPage from "./pages/AutoLinkPage";
import TrianglePage from "./pages/TrianglePage";
import CssSiblingsPage from "./pages/CssSiblingsPage";
import CarouselPage from "./pages/CarouselPage";
import OverUnderlineAnimationPage from "./pages/OverUnderlineAnimationPage";
import FileDropPage from "./pages/FileDropPage";
import LimitedWordTextareaPage from "./pages/LimitedWordTextareaPage";
import MultiselectCheckboxPage from "./pages/MultiselectCheckboxPage";
import TranslationPage from "./pages/TranslationPage";
import TruncateTextMultilinePage from "./pages/TruncateTextMultilinePage";
import bouncingLoader from "./pages/bouncingLoader";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AutoLinkPage/">AutoLinkPage</Link>
            </li>
            <li>
              <Link to="TrianglePage/">Triangle</Link>
            </li>
            <li>
              <Link to="CssSiblingsPage/">CssSiblings</Link>
            </li>
            <li>
              <Link to="CarouselPage/">CarouselPage</Link>
            </li>
            <li>
              <Link to="OverUnderlineAnimationPage/">OverUnderlineAnimation</Link>
            </li>
            <li>
              <Link to="FileDropPage/">FileDrop</Link>
            </li>
            <li>
              <Link to="LimitedWordTextareaPage/">LimitedWordTextarea</Link>
            </li>
            <li>
              <Link to="MultiselectCheckboxPage/">MultiselectCheckbox</Link>
            </li>
            <li>
              <Link to="TranslationPage/">Translation</Link>
            </li>
            <li>
              <Link to="TruncateTextMultilinePage/">TruncateTextMultilinePage</Link>
            </li>
            <li>
              <Link to="bouncingLoader/">bouncingLoader</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/AutoLinkPage/" component={AutoLinkPage} />
        <Route path="/TrianglePage/" component={TrianglePage} />
        <Route path="/CssSiblingsPage/" component={CssSiblingsPage} />
        <Route path="/CarouselPage/" component={CarouselPage} />
        <Route
          path="/OverUnderlineAnimation/"
          component={OverUnderlineAnimationPage}
        />
        <Route path="/FileDropPage/" component={FileDropPage} />
        <Route
          path="/LimitedWordTextareaPage/"
          component={LimitedWordTextareaPage}
        />
        <Route
          path="/MultiselectCheckboxPage/"
          component={MultiselectCheckboxPage}
        />
        <Route
          path="/TranslationPage/" s
          component={TranslationPage}
        />
        <Route
          path="/TruncateTextMultilinePage/"
          component={TruncateTextMultilinePage}
        />
        <Route
          path="/bouncingLoader/"
          component={bouncingLoader}
        />
      </div>
    </Router>
  );
}

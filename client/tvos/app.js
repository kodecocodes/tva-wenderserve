/*
 * Copyright (c) 2016 Razeware LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

require("babel-polyfill");

import NetworkController from './NetworkController.js';
import ResourceLoader from './ResourceLoader.js';
import DataController from './DataController.js';
import EventHandler from './EventHandler.js';
import Presenter from './Presenter.js';
import SearchHandler from './SearchHandler.js';


App.onLaunch = function(options) {
  const host =
    options["host"] || "https://wenderserve.herokuapp.com";

  const networkController = new NetworkController(host);
  const resourceLoader = new ResourceLoader(networkController);
  const dataController = new DataController(networkController);
  const searchHandler =
    new SearchHandler(resourceLoader, dataController);
  const presenter = new Presenter(resourceLoader, searchHandler);
  const eventHandler =
    new EventHandler(presenter, dataController);

  presenter.present("rootMenu.tvml", null, "push", eventHandler);
};


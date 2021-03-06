import React, { Component } from 'react';
import { Route } from 'react-router';
import TorrentTable from './torrent_table';
import TorrentDetails from './torrent_details';
import Server from './server';
import ConnectionOverlay from './connection';
import { AddTorrent } from './AddTorrent';
import { NavigationBarController } from './NavigationBarController';

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavigationBarController />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <TorrentTable />
            </div>
            <div className="col-md-4">
              <Route exact path="/add-torrent" component={AddTorrent} />
              <Route path="/add-torrent/:magnet" component={AddTorrent} />
              <Route path="/torrents/:ids" component={TorrentDetails} />
              <Route exact path="/" component={Server} />
            </div>
            <ConnectionOverlay />
          </div>
        </div>
      </div>
    );
  }
}

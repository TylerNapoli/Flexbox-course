import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discussion from "./discussion";
import Rules from "./rules";
import Workflow from "./workflow";

export default function() {
    return (
        <div>
            <switch>
                <Route exact path="/" component={Discussion} />
                <Route exact path="/rules" component={Rules} />
                <Route exact path="/workflow" component={Workflow} />
            </switch>
        </div>
    )
}
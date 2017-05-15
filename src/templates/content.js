import {searchTemplate} from './search.template';
import {usersTemplate} from './users.template';
import {chatBodyTemplate} from './chat-body.template';
import {infoUserTemplate} from './user-info.template';

export const content = `
        <div class="wrapper">
            <div class="content">
                <div class="container-fluid big-container mess-page">
                <div class="search-mess-bg"></div>

                <aside class="col-xs-12 col-sm-3 search-mess-wrapp padd-none">
                    <div class="row-fluid mess-page-wrapp">
                        <section id='search-messages'>
                            ${searchTemplate}
                        </section>
                        <section id='users-found'>
                            ${usersTemplate}
                        </section>
                        <section>
                            <button type="button" class="coll_down collapsed" data-toggle="collapse" data-target="#usersFound">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </section>
                    </div>
                </aside>

                <aside class="col-xs-12 col-sm-2 col-sm-push-7 fr-prof padd-none">
                    ${infoUserTemplate}
                </aside>

                <article class="col-xs-12 col-sm-7 col-sm-pull-2 chat-wrapp padd-none">
                    ${chatBodyTemplate}
                </article>

            </div>
        </div>
`;
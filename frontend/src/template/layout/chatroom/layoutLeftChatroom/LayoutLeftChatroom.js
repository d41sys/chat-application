import React, { useEffect } from 'react'

const LayoutLeftChatroom = ({listData}) => {
    console.log({listData});

    return <div class="col-md-4 col-xl-3 chat">
        <div class="card mb-sm-3 mb-md-0 contacts_card">
            <div class="card-header">
                <div class="input-group">
                    <input type="text" placeholder="Search..." name="" class="form-control search" />
                    <div class="input-group-prepend">
                        <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                    </div>
                </div>
            </div>
            <div class="card-body contacts_body">
                <ui class="contacts">
                    <li class="active">
                        <div class="d-flex bd-highlight">
                            <div class="img_cont">
                                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                                <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                                <span>alo</span>
                                <p>Kalid is online</p>
                            </div>
                        </div>
                    </li>
                </ui>
            </div>
            <div class="card-footer"></div>
        </div>
    </div>
}

export default LayoutLeftChatroom;
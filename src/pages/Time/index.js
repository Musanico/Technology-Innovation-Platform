import "./index.css"
import TopBar2 from "../../components/TopBar2";


function Time(){
    return(
        <div>
            <TopBar2 className={'time-bar'}/>
            <div className={'time-bgc'}>
                <div className={'time-point'} style={{top:353,left:190}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#4776E6"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>1</p>
                </div>
                <div className={'time-point'} style={{top:190,left:350}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#D21240"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>2</p>
                </div>
                <div className={'time-point'} style={{top:320,left:525}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#178484"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>3</p>
                </div>
                <div className={'time-point'} style={{top:195,left:637}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#B4710B"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>4</p>
                </div>
                <div className={'time-point'} style={{top:327,left:765}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#218E06"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>5</p>
                </div>
                <div className={'time-point'} style={{top:210,left:930}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#178484"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>6</p>
                </div>
                <div className={'time-point'} style={{top:290,left:1100}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#178484"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>7</p>
                </div>
                <div className={'time-point'} style={{top:200,left:1260}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#777777"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>8</p>
                </div>
                <div className={'time-point'} style={{top:330,left:1390}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#777777"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 30}}>9</p>
                </div>
                <div className={'time-point'} style={{top:225,left:1530}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#777777"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 19}}>10</p>
                </div>
                <div className={'time-point'} style={{top:320,left:1675}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#777777"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 19}}>11</p>
                </div>
                <div className={'time-point'} style={{top:200,left:1825}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="86" fill="none">
                        <ellipse cx="45" cy="43" rx="45" ry="43" fill="white"/>
                        <ellipse cx="45" cy="43" rx="37" ry="35" fill="#777777"/>
                    </svg>
                    <p className={'time-num'} style={{top: 20,
                        left: 19}}>12</p>
                </div>
                <div className={'time-mes'} style={{top:310,left:280}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="242" height="151" viewBox="0 0 242 151" fill="none">
                        <mask id="path-1-inside-1_99_132" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M132.561 22.4999L120.751 0L108.942 22.4999H7.5C3.35787 22.4999 0 25.8578 0 29.9999V143.25C0 147.392 3.35787 150.75 7.50001 150.75H234C238.142 150.75 241.5 147.392 241.5 143.25V29.9999C241.5 25.8578 238.142 22.4999 234 22.4999H132.561Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M132.561 22.4999L120.751 0L108.942 22.4999H7.5C3.35787 22.4999 0 25.8578 0 29.9999V143.25C0 147.392 3.35787 150.75 7.50001 150.75H234C238.142 150.75 241.5 147.392 241.5 143.25V29.9999C241.5 25.8578 238.142 22.4999 234 22.4999H132.561Z" fill="#D9D9D9"/>
                        <path d="M120.751 0L123.408 -1.39422L120.751 -6.45523L118.095 -1.39422L120.751 0ZM132.561 22.4999L129.904 23.8941L130.747 25.4999H132.561V22.4999ZM108.942 22.4999V25.4999H110.755L111.598 23.8941L108.942 22.4999ZM118.095 1.39422L129.904 23.8941L135.217 21.1057L123.408 -1.39422L118.095 1.39422ZM111.598 23.8941L123.408 1.39422L118.095 -1.39422L106.285 21.1057L111.598 23.8941ZM7.5 25.4999H108.942V19.4999H7.5V25.4999ZM3 29.9999C3 27.5146 5.01472 25.4999 7.5 25.4999V19.4999C1.70101 19.4999 -3 24.2009 -3 29.9999H3ZM3 143.25V29.9999H-3V143.25H3ZM7.50001 147.75C5.01472 147.75 3 145.735 3 143.25H-3C-3 149.049 1.70102 153.75 7.50001 153.75V147.75ZM234 147.75H7.50001V153.75H234V147.75ZM238.5 143.25C238.5 145.735 236.485 147.75 234 147.75V153.75C239.799 153.75 244.5 149.049 244.5 143.25H238.5ZM238.5 29.9999V143.25H244.5V29.9999H238.5ZM234 25.4999C236.485 25.4999 238.5 27.5146 238.5 29.9999H244.5C244.5 24.2009 239.799 19.4999 234 19.4999V25.4999ZM132.561 25.4999H234V19.4999H132.561V25.4999Z" fill="#16798F" mask="url(#path-1-inside-1_99_132)"/>
                    </svg>
                    <p className={'time-title'} style={{top: 40,
                        left: 16}}>1.第六届中国互联网+大赛 2.第十五届中国大学生服务外包创新创业大赛</p>
                </div>
                <div className={'time-mes'} style={{top:335,left:860}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="242" height="151" viewBox="0 0 242 151" fill="none">
                        <mask id="path-1-inside-1_99_132" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M132.561 22.4999L120.751 0L108.942 22.4999H7.5C3.35787 22.4999 0 25.8578 0 29.9999V143.25C0 147.392 3.35787 150.75 7.50001 150.75H234C238.142 150.75 241.5 147.392 241.5 143.25V29.9999C241.5 25.8578 238.142 22.4999 234 22.4999H132.561Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M132.561 22.4999L120.751 0L108.942 22.4999H7.5C3.35787 22.4999 0 25.8578 0 29.9999V143.25C0 147.392 3.35787 150.75 7.50001 150.75H234C238.142 150.75 241.5 147.392 241.5 143.25V29.9999C241.5 25.8578 238.142 22.4999 234 22.4999H132.561Z" fill="#D9D9D9"/>
                        <path d="M120.751 0L123.408 -1.39422L120.751 -6.45523L118.095 -1.39422L120.751 0ZM132.561 22.4999L129.904 23.8941L130.747 25.4999H132.561V22.4999ZM108.942 22.4999V25.4999H110.755L111.598 23.8941L108.942 22.4999ZM118.095 1.39422L129.904 23.8941L135.217 21.1057L123.408 -1.39422L118.095 1.39422ZM111.598 23.8941L123.408 1.39422L118.095 -1.39422L106.285 21.1057L111.598 23.8941ZM7.5 25.4999H108.942V19.4999H7.5V25.4999ZM3 29.9999C3 27.5146 5.01472 25.4999 7.5 25.4999V19.4999C1.70101 19.4999 -3 24.2009 -3 29.9999H3ZM3 143.25V29.9999H-3V143.25H3ZM7.50001 147.75C5.01472 147.75 3 145.735 3 143.25H-3C-3 149.049 1.70102 153.75 7.50001 153.75V147.75ZM234 147.75H7.50001V153.75H234V147.75ZM238.5 143.25C238.5 145.735 236.485 147.75 234 147.75V153.75C239.799 153.75 244.5 149.049 244.5 143.25H238.5ZM238.5 29.9999V143.25H244.5V29.9999H238.5ZM234 25.4999C236.485 25.4999 238.5 27.5146 238.5 29.9999H244.5C244.5 24.2009 239.799 19.4999 234 19.4999V25.4999ZM132.561 25.4999H234V19.4999H132.561V25.4999Z" fill="#16798F" mask="url(#path-1-inside-1_99_132)"/>
                    </svg>
                    <p className={'time-title'} style={{top: 40,
                        left: 16}}>1.第六届中国互联网+大赛 2.第十五届中国大学生服务外包创新创业大赛</p>
                </div>
                <div className={'time-mes'} style={{top:105,left:1017}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="243" height="151" viewBox="0 0 243 151" fill="none">
                        <mask id="path-1-inside-1_99_119" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M109.937 128.25L121.747 150.75L133.556 128.25H234.998C239.14 128.25 242.498 124.892 242.498 120.75L242.498 7.49982C242.498 3.35768 239.14 -0.000183105 234.998 -0.000183105L8.49803 -0.000183105C4.3559 -0.000183105 0.998032 3.35767 0.998032 7.4998L0.998032 120.75C0.998032 124.892 4.35591 128.25 8.49805 128.25H109.937Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.937 128.25L121.747 150.75L133.556 128.25H234.998C239.14 128.25 242.498 124.892 242.498 120.75L242.498 7.49982C242.498 3.35768 239.14 -0.000183105 234.998 -0.000183105L8.49803 -0.000183105C4.3559 -0.000183105 0.998032 3.35767 0.998032 7.4998L0.998032 120.75C0.998032 124.892 4.35591 128.25 8.49805 128.25H109.937Z" fill="#D9D9D9"/>
                        <path d="M121.747 150.75L119.09 152.144L121.747 157.205L124.403 152.144L121.747 150.75ZM109.937 128.25L112.594 126.856L111.751 125.25H109.937V128.25ZM133.556 128.25V125.25H131.742L130.9 126.856L133.556 128.25ZM124.403 149.356L112.594 126.856L107.281 129.644L119.09 152.144L124.403 149.356ZM130.9 126.856L119.09 149.356L124.403 152.144L136.212 129.644L130.9 126.856ZM234.998 125.25L133.556 125.25V131.25H234.998V125.25ZM239.498 120.75C239.498 123.235 237.483 125.25 234.998 125.25V131.25C240.797 131.25 245.498 126.549 245.498 120.75H239.498ZM239.498 7.49982L239.498 120.75H245.498L245.498 7.49982H239.498ZM234.998 2.99982C237.483 2.99982 239.498 5.01454 239.498 7.49982H245.498C245.498 1.70082 240.797 -3.00018 234.998 -3.00018V2.99982ZM8.49803 2.99982L234.998 2.99982V-3.00018L8.49803 -3.00018V2.99982ZM3.99803 7.4998C3.99803 5.01453 6.01274 2.99982 8.49803 2.99982V-3.00018C2.69905 -3.00018 -2.00197 1.70081 -2.00197 7.4998H3.99803ZM3.99803 120.75L3.99803 7.4998H-2.00197L-2.00197 120.75H3.99803ZM8.49805 125.25C6.01276 125.25 3.99803 123.235 3.99803 120.75H-2.00197C-2.00197 126.549 2.69907 131.25 8.49805 131.25V125.25ZM109.937 125.25L8.49805 125.25V131.25H109.937V125.25Z" fill="#16798F" mask="url(#path-1-inside-1_99_119)"/>
                    </svg>
                    <p className={'time-title'} style={{top: 20,
                        left: 16}}>1.第六届中国互联网+大赛 2.第十五届中国大学生服务外包创新创业大赛</p>
                </div>
            </div>
        </div>
    )
}

export default Time

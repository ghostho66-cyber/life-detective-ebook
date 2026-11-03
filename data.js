export const emotions=[{id:'happy',name:'開心',meaning:'嘴角向上，笑一笑。',scene:'收到自己鍾意嘅禮物。'},{id:'sad',name:'傷心',meaning:'嘴角向下，可能會流眼淚。',scene:'唔小心跌倒，覺得好難過。'},{id:'angry',name:'生氣',meaning:'眉毛向下，嘴巴抿緊。',scene:'有人未問過，就搶走你嘅物件。'},{id:'confused',name:'疑惑',meaning:'皺起眉頭，好似唔明白。',scene:'聽唔明白老師嘅指示。'}];
export const signs=[{id:'exit',name:'出口',meaning:'可以由呢度離開。'},{id:'toilet',name:'洗手間',meaning:'需要去廁所時，搵呢個標誌。'},{id:'bus',name:'巴士站',meaning:'等候巴士嘅地方。'},{id:'mtr',name:'港鐵站',meaning:'乘搭港鐵嘅地方。'},{id:'noentry',name:'不准進入',meaning:'唔可以由呢度進入。'},{id:'stop',name:'停車',meaning:'車輛要停低。'}];
export const words=[{id:'phone',name:'電話',meaning:'用嚟同人聯絡。'},{id:'bus',name:'巴士',meaning:'載我哋去唔同地方。'},{id:'toilet',name:'廁所',meaning:'有需要時可以去廁所。'},{id:'exit',name:'出口',meaning:'離開地方嘅通道。'},{id:'teacher',name:'老師',meaning:'教我哋學習，亦可以幫忙。'}];
export const sentences=[{scene:'口渴喇，想飲水。',icon:'water',tokens:['我','想','飲水']},{scene:'想去廁所，點樣講？',icon:'toilet',tokens:['我','想','去','廁所']},{scene:'遇到困難，需要人幫忙。',icon:'help',tokens:['我','需要','幫忙']},{scene:'有啲攰，想休息一陣。',icon:'rest',tokens:['我','想','休息']}];
export const chapters=[
 {id:'emotions',code:'1.1',title:'表情小偵探',short:'辨認面部表情',category:'視覺辨認',icon:'happy',desc:'睇一睇表情，了解自己同他人嘅感受。',guide:'先逐張介紹開心、傷心、生氣及疑惑，從二選一開始，穩定後加至三或四選一；再轉用生活情境。接受學生指認、說話或眼神選擇。'},
 {id:'signs',code:'1.2',title:'生活標誌站',short:'辨認日常標誌',category:'視覺辨認',icon:'bus',desc:'出口喺邊？認識生活中嘅重要標誌。',guide:'先認識標誌意思，再二選一或三選一。加入不准進入／停車等相近顏色標誌。網頁圖示為教學示意，請配合實地標誌泛化；實地尋找須由成人陪同。'},
 {id:'words',code:'1.3',title:'中文字配對',short:'認識常見中文字詞',category:'視覺辨認',icon:'book',desc:'將生活圖片，同熟悉嘅中文字連起來。',guide:'先介紹電話、巴士、廁所、出口及老師。由圖文提示開始，再進行圖片配對文字，最後移除圖片，只認文字。'},
 {id:'sentence',code:'1.4',title:'我想講⋯⋯',short:'重組句子表達需要',category:'視覺辨認',icon:'help',desc:'用圖字卡砌句子，講出自己嘅需要。',guide:'先示範我＋想＋飲水，逐次只設定一個情境。學生點選圖字卡排序，可撤回再排。完成後指讀、說話或向成人展示。接受合適的替代表達。'},
 {id:'sign-memory',code:'2.1',title:'標誌記憶盒',short:'記住剛看過的標誌',category:'視覺記憶',icon:'memory',desc:'望一望，記住啱啱見過嘅標誌。',guide:'出示2至3個標誌並逐一認讀，約5秒後遮蓋，再加入其他標誌，選出全部曾見過的標誌。可用手動收起調整觀察時間。'},
 {id:'word-memory',code:'2.2',title:'詞語記憶盒',short:'記住剛看過的詞語',category:'視覺記憶',icon:'phone',desc:'收起詞卡之後，你仲記得邊幾個？',guide:'出示2至3個常用詞語，觀看及認讀後收起，再混入其他詞語。完成後用網頁收拾卡片，並提醒學生自行收拾實物詞卡。'},
 {id:'parts',code:'3',title:'估估我係邊個',short:'從局部認出完整標誌',category:'部分與主體',icon:'puzzle',desc:'睇一部分，搵返完整嘅標誌。',guide:'先看完整標誌，再遮去一部分。選擇顯示二分之一或三分之二，憑顏色、形狀與圖案，從三個完整標誌中配對。'},
 {id:'trace',code:'4.1',title:'手指畫畫屋',short:'摹擬簡單筆畫',category:'手眼協調',icon:'pen',desc:'跟住方向，用手指慢慢畫。',guide:'老師先示範方向，學生用手指追蹤，再沿虛線摹寫。由粗長線條開始，之後轉細短線條，連結一、十、人、口。網頁覆蓋提示只供練習，完成與否由老師觀察；完成後收拾實物工具。'}
];
export const traceForms=[
 {name:'橫線',paths:[[[100,190],[500,190]]]}, {name:'直線',paths:[[[300,60],[300,330]]]},
 {name:'斜線',paths:[[[170,60],[430,320]]]}, {name:'轉折線',paths:[[[140,80],[460,80],[460,300]]]},
 {name:'一',paths:[[[100,190],[500,190]]]}, {name:'十',paths:[[[110,160],[490,160]],[[300,60],[300,330]]]},
 {name:'人',paths:[[[300,60],[270,190],[130,325]],[[280,160],[340,250],[470,325]]]},
 {name:'口',paths:[[[170,70],[170,315]],[[170,70],[430,70],[430,315]],[[170,315],[430,315]]]}
];

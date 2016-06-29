angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



.controller('MyCtrl', function($scope) {


  $scope.categories_chinese = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - 飞机 (Fēijī)","Airline - 航空公司 (Hángkōng gōngsī)","Arrivals - 到达 (Dàodá)","Board - 上 (Shàng)","Boarding pass - 登机卡 (Dēng jī kǎ)","Boarding time - 登机时间 (Dēng jī shíjiān)","Book a ticket - 订票 (Dìng piào)","Business class - 飞机商务舱 (Fēijī shāngwù cāng)","Economy class - 飞机经济 (Fēijī jīngjì cāng)","First class - 头等舱 (Tóuděng cāng)","Luggage - 行李 (Xínglǐ)","Check in - 报到 (Bàodào)","Baggage claim - 行李认领 (Xínglǐ rènlǐng)","Immigration - 移民 (Yímín)","Delayed - 延迟 (Yánchí)","Departures - 出港 (Chūgǎng)"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - 你好 (Nǐ hǎo)","My name is - 我的名字是(Wǒ de míngzì shì)","Good morning - 早上好 (Zǎoshang hǎo)","Good afternoon - 下午好 (Xiàwǔ hǎo)","Good evening - 晚上好 (Wǎnshàng hǎo)","Welcome - 欢迎 (Huānyíng)","Nice to meet you - 很高兴见到你 (Hěn gāoxìng jiàn dào nǐ)","How are you? - 你好吗 (Nǐ hǎo ma)","I'm fine, thanks - 我很好，谢谢 (Wǒ hěn hǎo, xièxiè)","Good - 好 (Hǎo)","Thank you - 谢谢 (Xièxiè)","You're welcome - 别客气 (Bié kèqì)","I don't understand -  我不明白 (Wǒ bù míngbái)","Good bye - 再见 (Zàijiàn)"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - 我迷路了 (Wǒ mílùle)","Can you help me? - 你可以帮我吗 (Nǐ kěyǐ bāng wǒ ma)","Where is the washroom? - 洗手间在哪里 (Xǐshǒujiān zài nǎlǐ)","Go straight - 笔直走 (Bǐzhí zǒu)","Left - 转左 (Zhuǎn zuǒ)","Right - 右转 (Yòu zhuǎn)","I'm looking for - 我正在寻找 (Wǒ zhèngzài xúnzhǎo)","Come with me - 跟着我 (Gēnzhe wǒ)","Taxi - 出租车 (Chūzū chē)","Bus - 公共巴士 (Gōnggòng bāshì)","Train - 地铁 (Dìtiě)","Map - 地图 (Dìtú)","Guide - 导游 (Dǎoyóu)"] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - 我预订了座位 (Wǒ yùdìngle zuòwèi)","Can I book a room? - 我能预订 (Wǒ néng yùdìng)","What's the cost per night? - 什么是每晚的费用 (Shénme shì měi wǎn de fèiyòng)","Single room - 单人房 (Dān rén fáng)","Double room - 双 (Shuāng)","Elevator - 电梯 (Diàntī)","Lobby - 前厅 (Qián tīng)","Manager - 酒店经理 (Jiǔdiàn jīnglǐ)","Room service - 客房服务 (Kèfáng fúwù)","Guest - 宾客 (Bīnkè)","Air-conditioned - 空调 (Kòngtiáo)","May I see the room? - 我可以看到房间 (Wǒ kěyǐ kàn dào fángjiān)","I don't like this room - 我不喜欢这个房间 (Wǒ bù xǐhuān zhège fángjiān)","Is there anything cheaper? - 有什么便宜一点的吗(Yǒu shé me piányí yīdiǎn de ma) "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - 哪里是一个很好的餐馆 (Nǎlǐ shì yīgè hěn hǎo de cānguǎn)","Breakfast - 早餐 (Zǎocān)","Lunch - 午餐 (Wǔcān)","Dinner - 晚餐 (Wǎncān)","Is there an available table? - 是否有可用的表 (Shìfǒu yǒu kěyòng de biǎo)","Menu - 菜单 (Càidān)","Waiter - 服务员 (服务员)","What do you recommend? - 你有什么建议 (Nǐ yǒu shé me jiànyì)","I would like the... - 我想要 (Wǒ xiǎng yào)","Beverage - 饮料 (Yǐnliào)","Food - 餐饮 (Cānyǐn)","Spoon - 勺 (Sháo)","Fork - 叉子 (Chāzi)","Knife - 刀 (Dāo)","Chopsticks - 筷子 (Kuàizi)","Spicy - 辣 (Là)","The bill, please - 我要买单 (Wǒ yāo mǎidān)","Thank you - 谢谢 (Xièxiè)"] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - 在哪里购物 (Zài nǎlǐ gòuwù)","Shopping mall - 购物中心 (Gòuwù zhòng xīn)","Market - 市场 (Shìchǎng)","How much does it cost? - 价钱 (Jiàqián)","Cash - 现金 (Xiànjīn)","Credit - 信用卡 (Xìnyòngkǎ)","I'm just looking - 我只是随便看看 (Wǒ zhǐshì suíbiàn kàn kàn)","Can you help me? - 你可以帮我吗 (Nǐ kěyǐ bāng wǒ ma)","Bakery - 面包店 (Miànbāo diàn)","Butcher - 屠夫 (Túfū)","Newsstand - 报摊 (Bào tān)","Clothing store - 服装店 (Fúzhuāng diàn)","Souvenir - 纪念品 (Jìniànpǐn)","Receipt - 收据 (Shōujù)","Fitting room - 试衣间 (Shì yī jiān)","It's too expensive - 昂贵 (Ángguì)","Do you have anything cheaper? - 便宜 (Piányí)","Thank you - 谢谢 (Xièxiè)"] }
  ];
  $scope.categories_french = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - Avion","Airline - Compagnie aérienne","Arrivals - Arrivées","Board - Embarquer dans l'avion","Boarding pass - Carte d'embarquement","Boarding time - Heure d'embarquement","Book a ticket - Réserver un billet","Business class - Classe affaire","Economy class - Classe économique","First class - Première classe","Luggage - Bagage","Check in - Se présenter à la réception","Baggage claim - Réclamation de bagages","Immigration - Immigration","Delayed - Différé","Departures - Départs"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - Bonjour","My name is - Mon nom est","Good morning - Bonjour","Good afternoon - Bonne après-midi","Good evening - Bonsoir","Welcome - Bienvenue","Nice to meet you - Ravi de vous rencontrer","How are you? - Comment allez-vous?","I'm fine, thanks - Je vais bien merci","Good - Bien","Thank you - Merci","You're welcome - De rien","I don't understand - Je ne comprends pas","Good bye - Au Revoir"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - Je suis perdu","Can you help me? - Pouvez-vous m'aider?","Where is the washroom? - Où est la salle de bain?","Go straight - Allez tout droit","Left - Va à gauche","Right - Aller à droite","I'm looking for - Je cherche","Come with me - Viens avec moi","Taxi - Taxi","Bus - Autobus","Train - Le métro","Map - Carte","Guide - Guide touristique"] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - J'ai une réservation","Can I book a room? - Puis-je réserver une chambre?","Do you have any vacancies? - Avez-vous des postes vacants?","What's the cost per night? - Quel est le coût par nuit?","Double room - Double chambre","Single room - La chambre d'une personne","Elevator - Ascenseur","Lobby - Hall","Manager - Directeur de l'hôtel","Room service - Service de chambre","Guest - Invité d'hôtel","Air-conditioned - Climatisé","May I see the room? - Puis-je voir la chambre ?","I don't like this room - Je n'aime pas cette pièce","Is there anything cheaper? - Y at-il quelque chose de moins cher?"] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - Où se trouve un bon restaurant?","Breakfast - Petit déjeuner","Lunch - Le déjeuner","Dinner - Dîner","Is there an available table? - Y at-il une table disponible?","Menu - Menu","Waiter - Serveur","What do you recommend? - Qu'est ce que tu recommandes?","I would like the... - Je voudrais que le","Beverage - Boisson","Food - Aliments","Spoon - Cuillère","Fork - Fourchette","Knife - Couteau","Spicy - Épicé","The bill, please - L'addition s'il vous plaît","Thank you - Merci"] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - Où sont les magasins?","Shopping mall - ","Market - Centre commercial","How much does it cost? - Combien ça coûte?","Cash - Argent","Credit - Carte de crédit","I'm just looking - Je regarde juste","Can you help me? - Pouvez-vous m'aider?","Bakery - Boulangerie","Butcher - Boucher","Newsstand - Kiosque à journaux","Clothing store - Magasin de vêtements","Souvenir - Souvenir","Receipt - Réception de magasin","Fitting room -Salle d'essayage","It's too expensive - C'est trop cher","Do you have anything cheaper? - Avez-vous quelque chose de moins cher?","Thank you - Merci"] }
  ];
  $scope.categories_german = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Luggage -","Check in -","Baggage claim -","Immigration -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Fitting room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_italian = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Luggage -","Check in -","Baggage claim -","Immigration -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Fitting room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_japanese = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Luggage -","Check in -","Baggage claim -","Immigration -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Fitting room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_spanish = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Luggage -","Check in -","Baggage claim -","Immigration -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Fitting room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];
  $scope.categories_turkish = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - ","Airline -","Arrivals -","Board -","Boarding pass -","Boarding time -","Book a ticket -","Business class -","Economy class -","First class -","Luggage -","Check in -","Baggage claim -","Immigration -","Delayed -","Departures -"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - ","My name is - ","Good morning -","Good afternoon -","Good evening -","Welcome -","Nice to meet you","How are you? -","I'm fine, thanks -","Business class -","Good -","Thank you -","You're welcome -","I don't understand - ","Good bye -"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - ","Can you help me? -","Where is the washroom? -","Go straight -","Left - ","Right -","I'm looking for -","Come with me -","Taxi -","Bus -","Train -","Map -","Guide - "] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - ","Can I book a room? -","Do you have any vacancies? - ","What's the cost per night? - ","Double room -","Single room -","Elevator - ","Lobby -","Manager -","Room service -","Guest -","Air-conditioned -","May I see the room? -","I don't like this room -","Is there anything cheaper? - "] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - ","Breakfast - ","Lunch - ","Dinner - ","Is there an available table? - ","Menu - ","Waiter - ","What do you recommend? - ","I would like the... - ","Beverage - ","Food - ","Spoon - ","Fork - ","Knife - ","Spicy - ","The bill, please - ","Thank you - "] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - ","Shopping mall - ","Market - ","How much does it cost? - ","Cash - ","Credit - ","I'm just looking - ","Can you help me? - ","Bakery - ","Butcher - ","Newsstand - ","Clothing store - ","Souvenir - ","Receipt - ","Fitting room - ","It's too expensive - ","Do you have anything cheaper? - ","Thank you - "] }
  ];


  $scope.toggleCategory = function(category) {
    if ($scope.isCategoryShown(category)) {
      $scope.shownCategory = null;
    } else {
      $scope.shownCategory = category;
    }
  };
  $scope.isCategoryShown = function(category) {
    return $scope.shownCategory === category;
  };
});
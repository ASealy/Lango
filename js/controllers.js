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
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - Où sont les magasins?","Shopping mall - Centre commercial","Market - Marché","How much does it cost? - Combien ça coûte?","Cash - Argent","Credit - Carte de crédit","I'm just looking - Je regarde juste","Can you help me? - Pouvez-vous m'aider?","Bakery - Boulangerie","Butcher - Boucher","Newsstand - Kiosque à journaux","Clothing store - Magasin de vêtements","Souvenir - Souvenir","Receipt - Réception de magasin","Fitting room -Salle d'essayage","It's too expensive - C'est trop cher","Do you have anything cheaper? - Avez-vous quelque chose de moins cher?","Thank you - Merci"] }
  ];
  $scope.categories_german = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - Flugzeug","Airline - Fluggesellschaft","Arrivals - Ankunft","Board - Einsteigen","Boarding pass - Bordkarte","Boarding time - Einsteigzeit","Book a ticket - Ein ticket buchen","Business class - Business klasse","Economy class - Economyclass","First class - Erste klasse","Luggage - Gepäck","Check in - Check-In","Baggage claim - Gepäckverlust","Immigration - Einwanderung","Delayed - Verspätet","Departures - Abflüge"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - Hallo","My name is - Mein name ist ","Good morning - Guten morgen","Good afternoon - Guten tag","Good evening - Guten abend","Welcome - Herzlich willkommen","Nice to meet you - Schön dich zu treffen","How are you? - Wie geht es dir?","I'm fine, thanks - Es geht mir gut, danke","Good - Gut","Thank you - Danke","You're welcome - Bitte","I don't understand - Ich verstehe nicht","Good bye - Auf Wiedersehen"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - Ich bin verloren","Can you help me? - Kannst du mir helfen?","Where is the washroom? - Wo ist der waschraum?","Go straight - Geh geradeaus","Left - Geh nach links","Right - Geh rechts","I'm looking for - Ich suche nach","Come with me - Komm mit mir","Taxi - Taxi","Bus - Bus","Train - Eisenbahn","Map - Karte","Guide - Reiseführer"] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - Ich habe eine reservierung","Can I book a room? - Kann ich ein zimmer buchen?","Do you have any vacancies? - Haben Sie freie Stellen?","What's the cost per night? - Was sind die kosten pro nacht ?","Double room - Doppelzimmer","Single room - Einzelzimmer","Elevator - Aufzug","Lobby - Lobby","Manager - Hotelmanager","Room service - Zimmerservice","Guest - Hotel gast","Air-conditioned - Klimatisiert","May I see the room? - Kann ich das zimmer sehen?","I don't like this room - Ich mag es nicht, diesen raum","Is there anything cheaper? - Gibt es etwas günstiger?"] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - Wo ist ein gutes restaurant?","Breakfast - Frühstück","Lunch - Mittagessen","Dinner - Abendessen","Is there an available table? - Gibt es einen freien tisch ?","Menu - Menü","Waiter - Bedienung","What do you recommend? - Was empfehlen sie?","I would like the... - Ich möchte die","Beverage - Getränk","Food - Essen","Spoon - Löffel","Fork - Gabel","Knife - Messer","Spicy - Würzig","The bill, please - Die rechnung bitte","Thank you - Danke"] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - Wo sind die geschäfte?","Shopping mall - Einkaufszentrum","Market - Markt","How much does it cost? - Wie viel kostet es?","Cash - Geld","Credit - Kreditkarte","I'm just looking - Ich schaue nur","Can you help me? - Kannst du mir helfen?","Bakery - Bäckerei","Butcher - Metzger","Newsstand - Zeitungsstand","Clothing store - Bekleidungsgeschäft","Souvenir - Souvenir","Receipt - Quittung","Fitting room - Umkleidekabine","It's too expensive - Es ist zu teuer","Do you have anything cheaper? - Haben sie etwas günstigeres?","Thank you - Danke"] }
  ];
  $scope.categories_italian = [
  { name: 'Airport', icon:"android-plane", contents: ["Airplane - Aereo","Airline - Linea aerea","Arrivals - Arrivi","Board - Imbarcarsi","Boarding pass - Carta d'imbarco","Boarding time - Orario di imbarco","Book a ticket - Prenotare un biglietto","Business class - La classe business","Economy class - La classe turistica","First class - Prima classe","Luggage - Bagaglio","Check in - Check in","Baggage claim - Ritiro bagagli","Immigration - Immigrazione","Delayed - Ritardato","Departures - Partenze"]},
  { name: 'Conversation',icon:"chatbubbles", contents: ["Hi - Ciao","My name is - Il mio nome è","Good morning - Buongiorno","Good afternoon - Buon pomeriggio","Good evening - Buonasera","Welcome - Benvenuto","Nice to meet you - Piacere di conoscerti","How are you? - Come stai?","I'm fine, thanks - Sto bene, grazie","Good - Buona","Thank you - Grazie","You're welcome - Prego","I don't understand - Non capisco","Good bye - Ciao"] },
  { name: 'Directions',icon:"compass", contents: ["I'm lost - Mi sono perso","Can you help me? - Mi puoi aiutare?","Where is the washroom? - Dov'è il bagno?","Go straight - Vai dritto","Left - Andate a sinistra","Right - Vai a destra","I'm looking for - Sto cercando","Come with me - Vieni con me","Taxi - Taxi","Bus - Autobus","Train - Treno","Map - Carta geografica","Guide - Guida turistica"] },
  { name: 'Hotel',icon:"home", contents: ["I have a reservation - Ho una prenotazione","Can I book a room? - Posso prenotare una camera?","Do you have any vacancies? - Avete dei posti liberi?","What's the cost per night? - Qual è il costo per notte?","Double room - Camera doppia","Single room - Stanza singola","Elevator - Ascensore","Lobby - Atrio","Manager - Direttore d'albergo","Room service - Servizio in camera","Guest - Ospite dell'hotel","Air-conditioned - Aria condizionata","May I see the room? - Vedo la stanza?","I don't like this room - Non mi piace questa stanza","Is there anything cheaper? - C'è qualcosa di più economico?"] },
  { name: 'Restaurant',icon:"android-restaurant", contents: ["Where is a good restaurant? - Dove si trova un buon ristorante?","Breakfast - Colazione","Lunch - Pranzo","Dinner - Cena","Is there an available table? - C'è un tavolo a disposizione?","Menu - Menu","Waiter - Cameriere","What do you recommend? - Che cosa suggerisci?","I would like the... - Vorrei che la","Beverage - Bevande","Food - Cibo","Spoon - Cucchiaio","Fork - Forchetta","Knife - Coltello","Spicy - Speziato","The bill, please - Il conto per favore","Thank you - Grazie"] },
  { name: 'Shopping',icon:"bag", contents: ["Where are the shops? - Dove sono i negozi?","Shopping mall - Centro commerciale","Market - Mercato","How much does it cost? - Quanto costa?","Cash - Contanti","Credit - Carta di credito","I'm just looking - Sto solo guardando","Can you help me? - Mi puoi aiutare?","Bakery - Panetteria","Butcher - Macellaio","Newsstand - Edicola","Clothing store - Negozio di vestiti","Souvenir - Souvenir","Receipt - Scontrino","Fitting room - Il camerino di prova","It's too expensive - È troppo caro","Do you have anything cheaper? - Avete qualcosa di più economico?","Thank you - Grazie"] }
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
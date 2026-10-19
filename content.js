/* Class 10 Study Hub — original chapter-wise practice content. No external question bank is used. */
const SYLLABUS={"Mathematics":["Real Numbers","Polynomials","Pair of Linear Equations in Two Variables","Quadratic Equations","Arithmetic Progressions","Triangles","Coordinate Geometry","Introduction to Trigonometry","Some Applications of Trigonometry","Circles","Areas Related to Circles","Surface Areas and Volumes","Statistics","Probability"],"Science":["Chemical Reactions and Equations","Acids, Bases and Salts","Metals and Non-metals","Carbon and its Compounds","Life Processes","Control and Coordination","How do Organisms Reproduce?","Heredity","Light – Reflection and Refraction","The Human Eye and the Colourful World","Electricity","Magnetic Effects of Electric Current","Our Environment"],"Social Science":["Resources and Development","Forest and Wildlife Resources","Water Resources","Agriculture","Minerals and Energy Resources","Manufacturing Industries","Lifelines of National Economy","The Rise of Nationalism in Europe","Nationalism in India","The Making of a Global World","The Age of Industrialisation","Print Culture and the Modern World","Power Sharing","Federalism","Gender, Religion and Caste","Political Parties","Outcomes of Democracy","Challenges to Democracy","Democracy and Diversity","Popular Struggles and Movements","Development","Sectors of Indian Economy","Money and Credit","Globalisation and Indian Economy","Consumer Rights"],"English":["A Letter to God","Nelson Mandela: Long Walk to Freedom","Two Stories about Flying","From the Diary of Anne Frank","Glimpses of India","Mijbil the Otter","Madam Rides the Bus","The Sermon at Benares","The Proposal","Dust of Snow","Fire and Ice","A Tiger in the Zoo","How to Tell Wild Animals","The Ball Poem","Amanda!","Animals","The Trees","Fog","The Tale of Custard the Dragon","For Anne Gregory","A Triumph of Surgery","The Thief's Story","The Midnight Visitor","A Question of Trust","Footprints Without Feet","The Making of a Scientist","The Necklace","Bholi"],"Information Technology":["Introduction to IT–ITeS Industry","Digital Documentation","Electronic Spreadsheet","Database Management System","Web Applications and Security","Communication Skills","Self-Management Skills","ICT Skills","Entrepreneurial Skills","Green Skills","Data Entry and Keyboarding Skills","Digital Presentation","Advanced Spreadsheet","Database Queries","Cyber Safety"],"Hindi (Sparsh Bhag 2)":["सूरदास के पद","राम-लक्ष्मण-परशुराम संवाद","आत्मकथ्य","उत्साह और अट नहीं रही है","यह दंतुरित मुस्कान और फसल","संगतकार","नेताजी का चश्मा","बालगोबिन भगत","लखनवी अंदाज़","मानवीय करुणा की दिव्य चमक","एक कहानी यह भी","स्त्री शिक्षा के विरोधी कुतर्कों का खंडन","नौबतखाने में इबादत","संस्कृति","माता का अँचल","साना-साना हाथ जोड़ि","मैं क्यों लिखता हूँ"]};
const SUBJECT_META={"Mathematics":{"icon":"📐"},"Science":{"icon":"🔬"},"Social Science":{"icon":"🌍"},"English":{"icon":"📖"},"Information Technology":{"icon":"💻"},"Hindi (Sparsh Bhag 2)":{"icon":"🪶"}};
const FACTS={"Resources and Development":["Resource planning involves identification and inventory of resources, planning structure and matching resource development with overall national development plans.","Land resources are affected by processes such as soil erosion and land degradation; conservation includes contour ploughing, terrace farming, strip cropping and shelter belts.","Soil types include alluvial, black, red and yellow, laterite and arid soils; each has distinct properties and crop suitability.","Sustainable resource development requires careful use of resources so present needs are met without compromising future generations."],"Forest and Wildlife Resources":["Biodiversity includes the variety of flora and fauna in an area; India is rich in species and ecosystems.","Major causes of depletion include habitat loss, hunting, pollution, over-exploitation and development projects.","Reserved, protected and unclassed forests have different levels of legal protection under forest-management systems.","Conservation efforts include national parks, wildlife sanctuaries, biosphere reserves and community participation."],"Water Resources":["Multipurpose river projects provide irrigation, hydroelectricity, flood control, water supply and other benefits, but can also create social and ecological costs.","Rainwater harvesting helps recharge groundwater and reduces dependence on surface sources; rooftop harvesting is a common local method.","Dams have sometimes caused displacement, submergence of forests and changes in river ecology.","Water scarcity can result from population growth, intensive irrigation, urbanisation, industrialisation and unequal access."],"Agriculture":["Rice, wheat, millets, pulses, tea, coffee, cotton, jute, sugarcane and rubber are important crops with different climatic requirements.","Rice needs high temperature and rainfall, while wheat prefers a cool growing season and moderate rainfall.","Indian agriculture includes subsistence farming, commercial farming and plantation agriculture; regional conditions influence cropping patterns.","Institutional and technological reforms include irrigation, crop insurance, improved seeds, credit and support for sustainable farming."],"Minerals and Energy Resources":["Minerals occur in veins and lodes, layers and alluvial deposits; their distribution is uneven and linked to geological structure.","Iron ore, manganese, bauxite and mica are important metallic or non-metallic mineral resources used by industries.","Coal, petroleum and natural gas are major conventional sources of energy; solar, wind, tidal and biogas are renewable alternatives.","Mineral conservation is essential because many mineral resources are finite and extraction can affect land, water and ecosystems."],"Manufacturing Industries":["Manufacturing adds value to raw materials and provides employment, income and linkages with agriculture and services.","Agro-based industries include cotton textiles, jute, sugar and food processing; mineral-based industries include iron and steel and cement.","Industrial pollution may affect air, water, land and noise levels; treatment plants, recycling and cleaner technology help reduce impacts.","Industrial location depends on raw materials, labour, power, capital, transport, markets and government policies."],"Lifelines of National Economy":["Transport and communication connect producers, consumers and markets and support the movement of goods, people and information.","Roadways are useful for short distances and door-to-door service, while railways carry large volumes over long distances.","Pipelines transport liquids and gases efficiently; waterways and airways are important for specialised and long-distance movement.","International trade creates economic links among countries, while tourism supports employment and earns foreign exchange."],"The Rise of Nationalism in Europe":["The French Revolution introduced ideas of liberty, equality and fraternity and helped spread the concept of the nation-state.","Giuseppe Mazzini promoted a united republican Italy; the unification of Germany was led politically by Prussia under Bismarck.","The Congress of Vienna in 1815 sought to restore conservative order in Europe after the Napoleonic period.","Nationalism also interacted with imperialism and contributed to tensions in the Balkans before the First World War."],"Nationalism in India":["The Rowlatt Act and the Jallianwala Bagh incident intensified opposition to British rule and influenced the national movement.","The Non-Cooperation Movement encouraged boycott of institutions and foreign goods but was withdrawn after the Chauri Chaura incident.","The Civil Disobedience Movement began with the Salt March and encouraged people to break selected colonial laws.","Different social groups joined the national movement with different expectations, making the movement broad but internally diverse."],"The Making of a Global World":["Pre-modern trade connected distant regions through goods, migration, ideas and cultural exchange long before modern globalisation.","Indentured labour carried workers from India and other regions to plantations and construction sites across the world.","The nineteenth-century global economy was shaped by migration, trade and capital flows as well as technological changes.","The Great Depression disrupted trade, employment and agricultural prices and affected economies across the world."],"The Age of Industrialisation":["Proto-industrialisation involved merchants supplying raw materials and organising production in rural households before factories became dominant.","The factory system expanded with mechanisation, but hand labour continued in many sectors because it could be flexible and specialised.","In India, colonial policies affected traditional textile production while Indian entrepreneurs gradually developed modern industries.","Advertisements, labels and branding became important in creating demand for manufactured goods."],"Print Culture and the Modern World":["Printing technology spread from East Asia to Europe; Gutenberg's press accelerated the production of books in Europe.","Print helped circulate religious debates, scientific ideas and political arguments and contributed to wider public discussion.","Print culture in India developed through newspapers, journals, religious texts and literature in several languages.","Colonial governments sometimes imposed censorship because printed material could influence public opinion and political mobilisation."],"Power Sharing":["Power sharing reduces the possibility of conflict by giving different groups a stake in political decision-making.","Belgium used accommodation among linguistic communities, while Sri Lanka followed majoritarian policies that intensified ethnic tensions.","Power can be shared among organs of government, levels of government, social groups and political parties or pressure groups.","Power sharing is desirable for both prudential reasons, such as stability, and moral reasons, such as democratic participation."],"Federalism":["Federalism divides powers between a central authority and constituent units, with each level having constitutionally assigned areas of authority.","India has Union, State and local levels of government, making it a three-tier federal system after constitutional decentralisation.","Linguistic reorganisation of states and the creation of coalition governments strengthened federal accommodation in India.","Decentralisation through Panchayats and Municipalities brings government closer to citizens."],"Gender, Religion and Caste":["Gender division often assigns different roles to men and women and can create unequal access to education, work and political power.","Communalism becomes dangerous when religion is used to claim political dominance or when one community is treated as superior to others.","Caste inequalities have changed over time, but discrimination and unequal access to resources can still persist.","Democracy can address social inequalities through equal rights, representation, laws and public debate."],"Political Parties":["Political parties contest elections, offer policies and programmes, form governments and make laws through their elected representatives.","A national party has a broad electoral presence and recognition under Election Commission rules; state parties have significant regional bases.","Major challenges include lack of internal democracy, dynastic succession, money and muscle power, and limited meaningful choices in some contests.","Reforms include organisational transparency, candidate disclosure and efforts to increase internal participation and accountability."],"Outcomes of Democracy":["Democracy is expected to produce accountable, responsive and legitimate government through regular elections and public participation.","Democratic decisions may take time because consultation and procedures are involved, but this can improve acceptance and accountability.","Democracy does not automatically eliminate economic inequality, and social and economic disparities can remain.","Democracy can enhance dignity and freedom by recognising citizens as equal political participants."],"Challenges to Democracy":["Foundational challenges involve establishing democratic institutions where democracy has not yet become stable.","Expansion challenges concern bringing more regions, groups and institutions under democratic participation and rights.","Deepening democracy means strengthening institutions, participation, transparency and the quality of decision-making.","Democratic reform should improve institutions rather than relying only on broad slogans or unrealistic promises."],"Democracy and Diversity":["Social differences can be based on birth or choice and may overlap in ways that intensify or reduce political conflict.","The civil rights movement in the United States showed how democratic mobilisation can challenge racial discrimination.","Political expression of social differences can be healthy when groups seek equality through democratic means.","Democracy works best when differences are accommodated through dialogue, rights and institutions rather than exclusion."],"Popular Struggles and Movements":["The movement in Nepal challenged authoritarian rule and helped restore democratic government.","Bolivia's Water War showed how citizens and organisations can mobilise against policies they consider unjust.","Pressure groups influence policy without necessarily seeking to form governments; movements often use protests, campaigns and public mobilisation.","Popular participation can deepen democracy by making institutions more responsive to citizens."],"Development":["Different people can have different development goals because income, security, equality, freedom and access to services matter differently to them.","Per capita income is used to compare average income but does not by itself show distribution or quality of life.","Health, education and public facilities are important non-income indicators of development.","Sustainable development requires balancing present needs with environmental protection and long-term resource availability."],"Sectors of Indian Economy":["The primary sector uses natural resources directly, the secondary sector transforms raw materials, and the tertiary sector provides services.","The organised sector follows formal rules and provides greater job security than most unorganised employment.","Disguised unemployment is common in agriculture when more people work than are actually required for the existing level of output.","Public and private sectors differ mainly in ownership and control, though both contribute to economic activity."],"Money and Credit":["Money acts as a medium of exchange and removes the need for double coincidence of wants in barter.","Banks accept deposits and provide loans; the difference between interest paid on deposits and interest charged on loans supports banking activity.","Formal credit sources include banks and cooperatives, while informal lenders may charge higher interest and operate without strong regulation.","Self-help groups can provide small loans and improve access to credit for members, especially where formal banking is limited."],"Globalisation and Indian Economy":["Globalisation connects production and markets across countries through trade, investment, technology and information flows.","Multinational corporations organise production across countries and can influence investment, employment and supply chains.","Liberalisation reduced several barriers to foreign trade and investment in India after the 1990s reforms.","Globalisation creates opportunities as well as pressures for small producers and workers, depending on their ability to compete and adapt."],"Consumer Rights":["Consumers need protection against unsafe goods, unfair trade practices, misleading information and exploitation.","The right to safety, information, choice, being heard, redressal and consumer education are important consumer rights.","Quality marks such as ISI and Hallmark help consumers identify products meeting specified standards.","Consumer courts and the consumer-protection framework provide mechanisms for grievance redressal."],"A Letter to God":["Lencho is a poor farmer whose crop is destroyed by a hailstorm.","Lencho has complete faith that God will help him after the disaster.","He writes to God asking for money to sow his field again.","The postmaster collects money for Lencho, but Lencho suspects the post-office employees when he receives less than requested."],"Nelson Mandela: Long Walk to Freedom":["Mandela describes the inauguration of South Africa's first democratic government and the end of apartheid rule.","He explains that courage is not the absence of fear but the triumph over it.","Mandela regards freedom as a responsibility and says that the oppressor and the oppressed are both deprived of humanity.","The chapter emphasises dignity, equality, sacrifice and the long struggle against racial oppression."],"Two Stories about Flying":["The young seagull is afraid to fly until hunger pushes him to take the first flight.","The seagull's family encourages him by creating a situation in which he must trust his wings.","In The Black Aeroplane, a pilot follows a mysterious black aeroplane through a storm and later finds no record of it.","The two stories explore fear, courage, uncertainty and the urge to overcome limitations."],"From the Diary of Anne Frank":["Anne Frank receives a diary and names it Kitty, treating it as a trusted friend.","She feels that paper has more patience than people and writes about her school, family and inner thoughts.","Anne describes her teachers and her habit of talking in class, including the essays Mr Keesing assigns her.","The diary shows a thoughtful young person developing self-awareness through honest writing."],"Glimpses of India":["A Baker from Goa describes the continuing importance of traditional Goan bakers and bread in local life.","Coorg presents the landscape, culture and traditions of the Kodavu people and the region's natural beauty.","Tea from Assam describes tea cultivation and legends associated with the origin of tea.","The chapter celebrates India's regional diversity through food, landscape, culture and local history."],"Mijbil the Otter":["The narrator adopts an otter named Mijbil in Iraq and develops a close bond with him.","Mijbil is playful, curious and fascinated by water.","The otter travels to London and causes difficulties for the narrator because of travel regulations.","The story highlights affection, observation and the unusual companionship between a human and an animal."],"Madam Rides the Bus":["Valli is an eight-year-old girl fascinated by the bus journey between her village and the nearby town.","She carefully saves money and gathers information before planning her first ride.","Valli enjoys the independence of the journey but is disturbed by seeing a dead cow on the return trip.","The story shows curiosity, confidence, maturity and the transition from innocence to a deeper understanding of life."],"The Sermon at Benares":["Kisa Gotami is devastated by the death of her only son and seeks a cure for him.","Buddha asks her to collect mustard seeds from a household that has never experienced death.","She discovers that every family has suffered loss and begins to understand the universality of death.","The lesson teaches acceptance, detachment and the truth that death is a natural part of life."],"The Proposal":["Lomov visits Chubukov's house intending to propose marriage to Natalya.","The proposal is repeatedly interrupted by arguments about Oxen Meadows and the superiority of their dogs.","Natalya is strong-willed and quarrelsome, while Lomov is nervous and prone to physical anxiety.","The play uses humour and exaggerated conflict to satirise marriage, property disputes and social expectations."],"Dust of Snow":["A crow shakes dust of snow from a hemlock tree onto the poet.","The small natural incident changes the poet's mood and saves part of a day he had regretted.","The poem shows how an ordinary moment in nature can bring emotional renewal.","The crow and hemlock, often associated with negative images, are used to create an unexpected positive effect."],"Fire and Ice":["The poem considers fire and ice as symbolic forms of destructive human desire.","Fire represents desire, greed or uncontrolled passion, while ice represents hatred or emotional coldness.","The poet believes either form of destructive emotion could bring about the end of the world.","The poem is brief but presents a moral reflection on destructive human tendencies."],"A Tiger in the Zoo":["The tiger is confined behind bars instead of moving freely through the jungle.","The poem contrasts the tiger's natural strength with the helplessness of captivity.","The tiger should be hunting in the wild but instead stalks the limited space of its cage.","The poem creates sympathy for the animal and criticises the loss of freedom caused by captivity."],"How to Tell Wild Animals":["The poem humorously describes exaggerated ways of identifying wild animals.","The poet uses rhyme, repetition and comic danger to make the descriptions entertaining.","The Asian lion, Bengal tiger, leopard, bear, hyena, crocodile and chameleon are presented through playful clues.","The poem combines knowledge of animals with irony and dark humour."],"The Ball Poem":["A boy loses his ball and experiences a painful lesson about loss.","The poet does not simply replace the ball because the real lesson concerns emotional attachment and responsibility.","The loss teaches the child that possessions can be lost and that people must learn to cope with such experiences.","The poem presents growing maturity through the acceptance of loss."],"Amanda!":["Amanda is repeatedly instructed by an adult to behave properly, sit straight, do homework and avoid undesirable habits.","She escapes into imaginative worlds where she can be free from constant instructions.","The poem highlights the tension between a child's need for freedom and an adult's desire for discipline.","Its changing images reveal Amanda's desire for independence and emotional space."],"Animals":["The poet admires animals because they are calm, self-contained and free from human greed and anxiety.","Animals do not complain endlessly about their condition or chase possessions in the way humans often do.","The poem contrasts human restlessness with the simplicity and contentment of animals.","The speaker envies animals for qualities that he feels humans have lost."],"The Trees":["The poem imagines trees moving out of a house and returning to the forest where they belong.","The trapped trees symbolise the human attempt to control nature.","Moonlight and night imagery create a quiet sense of movement and release.","The poem suggests that nature seeks freedom and cannot remain permanently confined."],"Fog":["Fog is compared to a cat because it arrives silently and moves softly.","The fog comes over the harbour and city, pauses briefly and then moves away.","The poem uses a compact extended comparison to capture the mysterious movement of fog.","Its brevity and imagery create a quiet, visual impression rather than a detailed narrative."],"The Tale of Custard the Dragon":["Belinda lives with several pets, including Custard the dragon, who is mocked for being cowardly.","When a pirate appears, the supposedly brave pets hide while Custard confronts and defeats the pirate.","The poem contrasts appearance and reality and shows that courage is proved by action.","The humorous narrative uses rhyme, repetition and exaggerated characters."],"For Anne Gregory":["The poem questions whether human love is based on inner qualities or physical beauty.","Anne Gregory is told that men may be attracted mainly by her external appearance.","The final idea suggests that complete, unconditional love belongs to God rather than ordinary human attraction.","The poem contrasts superficial beauty with deeper spiritual love."],"A Triumph of Surgery":["Tricki is an overfed dog whose unhealthy condition is caused by excessive food and lack of exercise.","Dr Herriot keeps Tricki at the surgery and controls his diet without using complicated medical treatment.","Tricki becomes active and healthy through exercise and a simple diet.","The story humorously shows that excessive pampering can harm a pet and that disciplined care matters."],"The Thief's Story":["Hari Singh is a young thief who changes his name frequently while working for people.","Anil employs Hari despite knowing he is not fully trustworthy and teaches him to read and write.","Hari steals money but returns because he realises education and trust can change his future.","The story presents reform through kindness, trust and the opportunity to learn."],"The Midnight Visitor":["Ausable is a secret agent who looks ordinary but uses intelligence to outwit Max.","Max enters Ausable's room with a gun and demands a report.","Ausable invents a story about a balcony and uses the expectation of a police arrival to frighten Max.","The story shows that intelligence and presence of mind can be more effective than physical strength."],"A Question of Trust":["Horace Danby is a respectable-looking man who secretly steals rare books to support his expensive hobby.","He breaks into a house but is deceived by a woman who pretends to be the owner.","The woman persuades Horace to open the safe and then leaves with the valuables.","The story uses irony to show that a thief can himself become the victim of another thief."],"Footprints Without Feet":["Griffin discovers a way to become invisible but uses the invention irresponsibly.","He steals clothes and food and creates fear because he can move unseen.","His invisibility gives him power but does not make him morally responsible.","The story explores science without ethics, misuse of knowledge and the consequences of selfish behaviour."],"The Making of a Scientist":["Richard Ebright develops an interest in collecting butterflies and gradually becomes a serious scientific learner.","His mother encourages curiosity, reading, experiments and disciplined work.","A project on monarch butterflies helps him move from simple observation towards scientific investigation.","The chapter shows that curiosity, hard work, guidance and perseverance contribute to scientific success."],"The Necklace":["Matilda Loisel dreams of luxury and feels dissatisfied with her modest life.","She borrows a necklace for a party but loses it after returning home.","She and her husband replace the necklace and spend years repaying the resulting debt.","At the end, Matilda learns that the original necklace was imitation jewellery, creating the story's central irony."],"Bholi":["Sulekha, called Bholi, is considered simple and is neglected because of her appearance and speech difficulty.","A supportive teacher encourages Bholi to speak and study and helps her gain confidence.","Bholi refuses to marry Bishamber when he demands dowry and humiliates her.","The story presents education as a source of self-respect, independence and empowerment."],"सूरदास के पद":["पदों में गोपियों का कृष्ण के प्रति प्रेम और विरह व्यक्त हुआ है।","गोपियाँ उद्धव के ज्ञान-योग के संदेश को अपने प्रेम की तुलना में नीरस मानती हैं।","कृष्ण के प्रति उनकी भक्ति में गहरी आत्मीयता, समर्पण और विरह-वेदना है।","कवि ने ब्रजभाषा, भावात्मक चित्रण और संवादात्मक शैली से प्रेम-भक्ति को प्रभावी बनाया है।"],"राम-लक्ष्मण-परशुराम संवाद":["प्रसंग में शिवधनुष टूटने के बाद परशुराम का क्रोध सामने आता है।","लक्ष्मण अपने तीखे और व्यंग्यपूर्ण उत्तरों से परशुराम के क्रोध का सामना करते हैं।","राम विनम्रता और संयम से स्थिति को शांत करने का प्रयास करते हैं।","संवाद में वीरता, विनय, क्रोध, व्यंग्य और मर्यादा का प्रभावी चित्रण है।"],"आत्मकथ्य":["कविता में कवि अपने जीवन के निजी अनुभवों को आत्मकथा के रूप में कहने से संकोच करता है।","कवि वर्तमान की पीड़ा और अतीत की स्मृतियों के बीच अपने मन की स्थिति व्यक्त करता है।","कविता में आत्मसम्मान, पीड़ा, स्मृति और रचनात्मक संवेदना प्रमुख हैं।","भाषा में भावुकता और आत्मचिंतन का स्वर दिखाई देता है।"],"उत्साह और अट नहीं रही है":["उत्साह में कवि बादल से परिवर्तन और जीवन में नई ऊर्जा लाने का आह्वान करता है।","अट नहीं रही है में प्रकृति के सौंदर्य और फागुनी वातावरण की समृद्ध छटा है।","दोनों कविताओं में प्रकृति केवल दृश्य नहीं बल्कि भाव और परिवर्तन की शक्ति बनती है।","कवि की भाषा में गति, चित्रात्मकता और संवेदनशीलता दिखाई देती है।"],"यह दंतुरित मुस्कान और फसल":["दंतुरित मुस्कान में शिशु की मुस्कान कवि के जीवन में सहज आनंद और आशा भरती है।","फसल में किसान, प्रकृति और श्रम के संयुक्त योगदान से अन्न के निर्माण को रेखांकित किया गया है।","कविताएँ जीवन की साधारण चीजों में छिपी सुंदरता और श्रम के महत्व को सामने लाती हैं।","भाषा सरल होते हुए भी गहरी मानवीय संवेदना व्यक्त करती है।"],"संगतकार":["संगतकार मुख्य कलाकार के साथ रहकर उसकी प्रस्तुति को सहारा देता है।","कविता उन सहायक कलाकारों के महत्व को सामने लाती है जिन्हें मंच पर अक्सर कम पहचान मिलती है।","संगतकार अपनी भूमिका में विनम्र रहता है और मुख्य कलाकार की सफलता में योगदान देता है।","कविता सामूहिकता, सहयोग और अनदेखे श्रम का सम्मान करती है।"],"नेताजी का चश्मा":["कहानी में नेताजी की मूर्ति और उस पर चश्मा लगाने की घटना के माध्यम से देशभक्ति की भावना दिखाई गई है।","कैप्टन चश्मेवाला मूर्ति पर चश्मा लगाकर सम्मान व्यक्त करता है।","हवलदार और अन्य पात्रों की प्रतिक्रियाएँ समाज में देशभक्ति के अलग-अलग रूप दिखाती हैं।","कहानी में व्यंग्य के साथ सच्ची श्रद्धा और साधारण व्यक्ति की संवेदना उभरती है।"],"बालगोबिन भगत":["बालगोबिन भगत सरल, संत स्वभाव और श्रमशील व्यक्ति हैं।","वे कबीर की वाणी गाते हैं और जीवन में वैराग्य तथा मानवीयता का संतुलन रखते हैं।","पुत्र की मृत्यु पर भी उनका व्यवहार जीवन की नश्वरता और आध्यात्मिक विश्वास को दर्शाता है।","उनका चरित्र सामाजिक रूढ़ियों से ऊपर उठी मानवीय चेतना का उदाहरण है।"],"लखनवी अंदाज़":["कहानी में लेखक लखनऊ की तहज़ीब और नवाबी दिखावे पर हल्के व्यंग्य के साथ टिप्पणी करता है।","नवाब साहब खीरे को बहुत सलीके से काटने और खाने की तैयारी करते हैं।","लेखक और नवाब साहब के व्यवहार में सामाजिक दिखावे और औपचारिकता का अंतर दिखाई देता है।","कहानी हास्य और व्यंग्य के माध्यम से बनावटी शिष्टाचार पर प्रश्न उठाती है।"],"मानवीय करुणा की दिव्य चमक":["फादर कामिल बुल्के का जीवन भारतीय समाज और हिंदी भाषा के प्रति गहरे प्रेम से जुड़ा था।","उनमें सरलता, करुणा, अपनापन और दूसरों की सहायता करने की भावना थी।","वे हिंदी के अध्ययन और शब्दकोश निर्माण जैसे कार्यों से जुड़े रहे।","लेखक उनके व्यक्तित्व में मानवीय संवेदना और आध्यात्मिक विनम्रता की चमक देखता है।"],"एक कहानी यह भी":["मन्नू भंडारी अपने बचपन, परिवार और साहित्यिक जीवन के अनुभवों को आत्मकथात्मक ढंग से प्रस्तुत करती हैं।","उनके व्यक्तित्व पर परिवार और विशेष रूप से पिता के विचारों का प्रभाव पड़ा।","शिक्षा और लेखन के क्षेत्र में उन्होंने अपने लिए स्वतंत्र पहचान बनाई।","पाठ में स्त्री की आत्मनिर्भरता, संघर्ष और रचनात्मक विकास की झलक मिलती है।"],"स्त्री शिक्षा के विरोधी कुतर्कों का खंडन":["पाठ स्त्री शिक्षा के विरोध में दिए जाने वाले रूढ़िवादी तर्कों का तार्किक खंडन करता है।","लेखक शिक्षा को स्त्री और समाज दोनों के विकास के लिए आवश्यक मानता है।","अज्ञान को बनाए रखने वाले सामाजिक तर्कों की कमजोरियाँ उदाहरण और तर्क से सामने लाई जाती हैं।","पाठ समानता, विवेक और शिक्षा के अधिकार की आवश्यकता पर बल देता है।"],"नौबतखाने में इबादत":["पाठ उस्ताद बिस्मिल्ला खाँ के जीवन और शहनाई के प्रति उनके समर्पण को प्रस्तुत करता है।","उनका संगीत काशी, गंगा और सांस्कृतिक वातावरण से गहराई से जुड़ा था।","उन्होंने शहनाई को प्रतिष्ठित मंच और शास्त्रीय संगीत की पहचान दिलाने में महत्वपूर्ण योगदान दिया।","उनके जीवन में साधना, विनम्रता, परंपरा और सांस्कृतिक एकता प्रमुख मूल्य हैं।"],"संस्कृति":["संस्कृति मनुष्य के जीवन-मूल्यों, विचारों, व्यवहार और सृजनशीलता से जुड़ी होती है।","सभ्यता बाहरी साधनों और सुविधाओं से अधिक संबंधित हो सकती है, जबकि संस्कृति आंतरिक मूल्यों से जुड़ती है।","भारतीय संस्कृति में विविध परंपराओं को आत्मसात करने की क्षमता पर बल दिया गया है।","पाठ सांस्कृतिक विकास को मानवीय और नैतिक दृष्टि से समझने का आग्रह करता है।"],"माता का अँचल":["पाठ में ग्रामीण बाल्यजीवन और माँ के स्नेहपूर्ण संरक्षण का चित्रण है।","बच्चों की शरारतों, खेल और भय के बीच माँ का आँचल सुरक्षा और अपनापन देता है।","ग्रामीण परिवेश, पारिवारिक संबंध और बचपन की सहजता पाठ की प्रमुख विशेषताएँ हैं।","माता का अँचल भावनात्मक सुरक्षा और मातृ-स्नेह का प्रतीक बन जाता है।"],"साना-साना हाथ जोड़ि":["लेखिका सिक्किम की यात्रा में प्रकृति, पहाड़ों, स्थानीय जीवन और संस्कृति को निकट से देखती हैं।","यात्रा के दौरान प्राकृतिक सौंदर्य के साथ स्थानीय लोगों की सरलता और मेहनत भी सामने आती है।","पाठ में पर्यावरण के प्रति संवेदनशीलता और पर्यटन के जिम्मेदार दृष्टिकोण की भावना है।","प्रकृति और मनुष्य के संबंध को यात्रा-वृत्तांत की शैली में चित्रित किया गया है।"],"मैं क्यों लिखता हूँ":["लेखक लेखन को भीतर की अनुभूति और अनुभव को अभिव्यक्त करने की आवश्यकता से जोड़ता है।","रचनात्मक लेखन केवल मनोरंजन नहीं बल्कि आत्मअन्वेषण और सामाजिक अनुभवों की अभिव्यक्ति भी हो सकता है।","लेखक के लिए लिखना जीवन और आसपास की दुनिया को समझने का माध्यम है।","पाठ सृजन की प्रेरणा, संवेदना और लेखक की जिम्मेदारी पर विचार करता है।"],"Introduction to IT–ITeS Industry":["IT refers to technologies used to create, store, process and communicate information.","ITeS uses information technology to deliver services such as BPO, customer support, data processing and online services.","Digital services depend on computers, networks, software and communication systems.","IT and ITeS create employment opportunities but require technical, communication and professional skills."],"Digital Documentation":["A word processor is used to create, edit, format and print digital documents.","Styles provide consistent formatting for headings, paragraphs and other document elements.","Tables, images, headers, footers and page styles improve document structure and presentation.","Templates help users create documents with a predefined design and formatting structure."],"Electronic Spreadsheet":["A spreadsheet stores data in rows and columns and uses cells for entering values or formulas.","Formulas perform calculations and functions provide predefined operations such as SUM and AVERAGE.","Cell references may be relative or absolute depending on how a formula should behave when copied.","Charts convert spreadsheet data into visual representations that make patterns easier to understand."],"Database Management System":["A database is an organised collection of related data; a DBMS helps create, store, retrieve and manage it.","Tables contain records in rows and fields in columns.","Primary keys uniquely identify records in a table.","Queries are used to retrieve selected records according to specified conditions."],"Web Applications and Security":["Web applications run through a browser and communicate with a server over a network.","Strong passwords, secure browsing and careful handling of personal data reduce online risks.","Malware, phishing and unsafe links can compromise devices or information.","Regular updates, antivirus protection and safe authentication practices improve security."],"Communication Skills":["Effective communication requires a clear message, suitable language and attention to the receiver.","Verbal communication uses spoken or written words, while non-verbal communication includes gestures, facial expressions and posture.","Active listening involves paying attention, understanding and responding appropriately.","Feedback helps identify misunderstandings and improve communication."],"Self-Management Skills":["Self-management includes setting goals, organising tasks, managing time and controlling stress.","SMART goals are specific, measurable, achievable, relevant and time-bound.","A to-do list and prioritisation help manage tasks efficiently.","Positive self-motivation and emotional control support consistent performance."],"ICT Skills":["ICT includes digital tools used to create, store, process and communicate information.","Email, cloud storage, word processors and online collaboration tools support modern work.","File management includes organising folders, naming files clearly and maintaining backups.","Responsible ICT use includes privacy, security, copyright awareness and respectful online behaviour."],"Entrepreneurial Skills":["An entrepreneur identifies an opportunity and organises resources to create value through a venture.","Creativity, risk awareness, initiative and problem-solving are important entrepreneurial qualities.","A business plan helps organise goals, customers, resources, costs and expected outcomes.","Entrepreneurship can create employment and contribute to economic development."],"Green Skills":["Green skills support sustainable use of resources and environmentally responsible work practices.","Energy efficiency, waste reduction, recycling and responsible consumption reduce environmental impact.","Renewable energy sources can reduce dependence on finite fossil fuels.","Green jobs and sustainable practices are increasingly important across industries."],"Data Entry and Keyboarding Skills":["Accurate data entry requires attention to detail, correct formatting and consistent procedures.","Touch typing improves speed because the user relies on finger positions rather than looking constantly at the keyboard.","Common keyboard shortcuts can improve productivity and reduce repetitive work.","Checking data after entry helps detect missing values, typing errors and inconsistent formats."],"Digital Presentation":["Presentation software is used to communicate information through a sequence of slides.","A good slide uses readable text, clear hierarchy and relevant visuals rather than excessive content.","Themes and layouts maintain consistency across slides.","Speaker notes and rehearsal help a presenter deliver information clearly and confidently."],"Advanced Spreadsheet":["Advanced spreadsheet work can use conditional formatting, sorting, filtering and multiple functions to analyse data.","IF and related logical functions allow results to depend on conditions.","Data validation can restrict the type or range of values entered in a cell.","Pivot-style analysis and charts can summarise large datasets for decision-making."],"Database Queries":["A query retrieves selected information from one or more database tables.","Criteria filter records according to conditions such as equality, ranges or text patterns.","Sorting controls the order in which records are displayed.","Query design should use clear fields and conditions so that the result matches the information need."],"Cyber Safety":["Cyber safety means protecting devices, accounts, data and personal information from digital threats.","Phishing messages try to trick users into revealing passwords, financial details or other sensitive information.","Two-factor authentication adds an extra verification step beyond a password.","Privacy settings, software updates, strong passwords and cautious sharing reduce cyber risk."],"Real Numbers":["Euclid's division algorithm repeatedly applies a=bq+r to find the HCF of two positive integers.","The Fundamental Theorem of Arithmetic states that every composite number has a unique prime factorisation apart from order.","For positive integers a and b, HCF(a,b) × LCM(a,b)=a×b.","A rational number has a terminating decimal expansion only when its reduced denominator has no prime factors other than 2 and 5."],"Polynomials":["For a quadratic polynomial ax²+bx+c, the sum of zeroes is −b/a.","For a quadratic polynomial ax²+bx+c, the product of zeroes is c/a.","A zero of a polynomial is a value of x for which the polynomial becomes zero.","The graph of a quadratic polynomial is a parabola and its zeroes are the x-coordinates where it meets the x-axis."],"Pair of Linear Equations in Two Variables":["A pair of linear equations can have one solution, no solution or infinitely many solutions.","For a₁/a₂ ≠ b₁/b₂ the pair has a unique solution; for a₁/a₂=b₁/b₂≠c₁/c₂ it is inconsistent.","For a₁/a₂=b₁/b₂=c₁/c₂ the two equations represent coincident lines and have infinitely many solutions.","Graphically, the solution of a pair is the point of intersection of the two lines."],"Quadratic Equations":["A quadratic equation has the form ax²+bx+c=0 with a≠0.","The discriminant D=b²−4ac determines the nature of roots.","The quadratic formula is x=(−b±√D)/(2a).","If D>0 roots are real and distinct, if D=0 they are real and equal, and if D<0 they are not real."],"Arithmetic Progressions":["An arithmetic progression has a constant common difference d between consecutive terms.","The nth term of an AP is aₙ=a+(n−1)d.","The sum of the first n terms is Sₙ=n/2[2a+(n−1)d].","In an AP, the sum of terms equidistant from the beginning and end is constant."],"Triangles":["Two triangles are similar when their corresponding angles are equal and corresponding sides are proportional.","The Basic Proportionality Theorem states that a line parallel to one side of a triangle divides the other two sides proportionally.","Areas of similar triangles are in the ratio of the squares of their corresponding sides.","In right triangles, the Pythagoras theorem relates the square of the hypotenuse to the sum of the squares of the other two sides."],"Coordinate Geometry":["The distance between two points is √[(x₂−x₁)²+(y₂−y₁)²].","The midpoint of two points is ((x₁+x₂)/2,(y₁+y₂)/2).","The section formula gives the coordinates of a point dividing a line segment in a given ratio.","The area of a triangle with coordinates (x₁,y₁),(x₂,y₂),(x₃,y₃) can be found using the determinant formula."],"Introduction to Trigonometry":["For an acute angle, sinθ=perpendicular/hypotenuse and cosθ=base/hypotenuse.","tanθ=perpendicular/base and tanθ=sinθ/cosθ when cosθ is non-zero.","The identity sin²θ+cos²θ=1 is fundamental.","Standard values are commonly used for 0°, 30°, 45°, 60° and 90° where defined."],"Some Applications of Trigonometry":["Heights and distances problems use angles of elevation and depression.","The line of sight joins the observer's eye to the observed object.","A right triangle model connects height, horizontal distance and angle.","The angle of depression from a horizontal line equals the corresponding angle of elevation from the object in the appropriate configuration."],"Circles":["The tangent at any point of a circle is perpendicular to the radius through the point of contact.","Tangents drawn from an external point to a circle are equal in length.","A tangent touches a circle at exactly one point.","The number of tangents from a point depends on its position: none from an interior point, one from a point on the circle and two from an external point."],"Areas Related to Circles":["The area of a circle is πr² and its circumference is 2πr.","The area of a sector of angle θ is θ/360 × πr².","The length of an arc subtending θ at the centre is θ/360 × 2πr.","Area of a segment is obtained by subtracting the area of the corresponding triangle from the sector when applicable."],"Surface Areas and Volumes":["The curved surface area of a cylinder is 2πrh and its volume is πr²h.","The volume of a cone is one-third of πr²h and its curved surface area is πrl.","The surface area of a sphere is 4πr² and its volume is 4/3πr³.","In combination and conversion problems, dimensions and units must remain consistent."],"Statistics":["The mean of grouped data can be calculated by direct, assumed-mean or step-deviation methods.","For grouped data, median is l+[(n/2−cf)/f]h.","The mode formula for grouped data is l+[(f₁−f₀)/(2f₁−f₀−f₂)]h.","Cumulative frequency is used to locate the median class and is built by successive addition of frequencies."],"Probability":["For equally likely outcomes, P(E)=number of favourable outcomes/total number of outcomes.","Probability lies between 0 and 1 inclusive.","P(not E)=1−P(E).","An impossible event has probability 0 and a sure event has probability 1."],"Chemical Reactions and Equations":["A chemical equation represents reactants and products using chemical formulae.","A balanced equation obeys conservation of atoms and therefore conservation of mass.","Combination, decomposition, displacement and double displacement are common reaction types.","Oxidation and reduction occur together in redox reactions; corrosion and rancidity are important applications."],"Acids, Bases and Salts":["Acids release H+ ions in aqueous solution while bases produce OH− ions.","The pH scale measures acidic or basic character; lower pH indicates greater acidity.","Neutralisation is the reaction of an acid with a base to form salt and water.","Common salt is sodium chloride; important related compounds include baking soda, washing soda, bleaching powder and plaster of Paris."],"Metals and Non-metals":["Metals are generally lustrous, malleable, ductile and good conductors, while non-metals generally show contrasting properties.","Ionic compounds form through transfer of electrons and usually have high melting points.","The reactivity series compares metals according to their tendency to lose electrons.","Extraction of metals depends on their reactivity; corrosion can be reduced by methods such as painting, galvanising and alloying."],"Carbon and its Compounds":["Carbon forms covalent bonds and shows catenation, allowing many stable compounds.","A homologous series has the same functional group and general formula, with successive members differing by CH₂.","Ethanol contains the –OH functional group while ethanoic acid contains the –COOH group.","Soaps and detergents help remove oily dirt; soap molecules have hydrophilic and hydrophobic parts."],"Life Processes":["Nutrition, respiration, transport and excretion are major life processes.","Photosynthesis uses carbon dioxide and water in the presence of light and chlorophyll to form food and oxygen.","The human heart has four chambers and maintains separate pulmonary and systemic circulation.","Nephrons are the functional units of kidneys and help filter blood and form urine."],"Control and Coordination":["The nervous system coordinates rapid responses through electrical impulses and chemical signals.","A reflex action is a quick automatic response that commonly uses a reflex arc through the spinal cord.","Plant hormones such as auxin influence growth and movements such as phototropism.","The endocrine system uses hormones to regulate functions including growth, metabolism and reproduction."],"How do Organisms Reproduce?":["Asexual reproduction generally involves one parent and produces offspring genetically similar to the parent.","Sexual reproduction involves formation and fusion of male and female gametes.","Reproductive organs produce gametes and hormones and support fertilisation and development.","DNA copying is necessary for reproduction and can introduce variations that contribute to evolution."],"Heredity":["Genes are units of heredity located on chromosomes.","Mendel used pea plants to study inheritance and proposed patterns such as dominance and segregation.","A dominant allele can mask a recessive allele in a heterozygous condition.","Sex determination in humans involves XX chromosomes in females and XY chromosomes in males, with the sperm determining the sex chromosome contributed."],"Light – Reflection and Refraction":["The laws of reflection state that angle of incidence equals angle of reflection and the rays lie in the same plane.","Mirror and lens formulae relate object distance, image distance and focal length with a sign convention.","A concave mirror can form real or virtual images depending on object position.","Refractive index compares the speed of light in vacuum with its speed in a medium and refraction bends light at a change of medium."],"The Human Eye and the Colourful World":["The human eye forms a real, inverted image on the retina and the brain interprets it.","Myopia is corrected using a concave lens while hypermetropia is corrected using a convex lens.","Presbyopia is associated with reduced accommodation with age and may require suitable corrective lenses.","Atmospheric refraction explains effects such as twinkling of stars and apparent early sunrise; scattering explains the blue colour of the sky."],"Electricity":["Electric current is the rate of flow of electric charge, I=Q/t.","Ohm's law states V=IR for a conductor under constant physical conditions.","Resistance depends on material, length and cross-sectional area: R=ρl/A.","Electrical power can be expressed as P=VI, I²R or V²/R, and electrical energy is commonly measured in kWh."],"Magnetic Effects of Electric Current":["A current-carrying conductor produces a magnetic field around it.","The right-hand thumb rule gives the direction of the magnetic field around a straight current-carrying conductor.","An electric motor converts electrical energy into mechanical energy using magnetic force on a current-carrying conductor.","Electromagnetic induction is the production of current due to changing magnetic flux and is used in generators."],"Our Environment":["An ecosystem includes living organisms and their physical environment.","Energy flows through food chains and only a small fraction is transferred to the next trophic level.","Biodegradable substances can be decomposed by microorganisms, while non-biodegradable substances persist for long periods.","Ozone in the upper atmosphere absorbs harmful ultraviolet radiation; chemicals such as CFCs have contributed to ozone depletion."]};

function factFor(subject,chapter){return (FACTS[chapter]||[]).slice(0,4)}
function words(s){return String(s).trim().split(/\s+/).filter(Boolean).length}
function expandAnswer(a,n,subject){
  if(words(a)>=n)return a;
  if(subject==='Hindi (Sparsh Bhag 2)') return a+' इस उत्तर में पाठ के भाव, पात्रों या काव्य-संदर्भ को ध्यान में रखना आवश्यक है, क्योंकि यही उसके केंद्रीय विचार को स्पष्ट करता है।';
  if(subject==='English') return a+' The detail is important because it connects the event or image with the chapter’s central idea, character development, or theme.';
  return a+' This point should be understood with the chapter context because it explains the concept, its significance, and its practical or textual connection.';
}
function conceptFromFact(f){
  let s=f.replace(/^A\s+/,'').replace(/^An\s+/,'').replace(/^The\s+/,'');
  let m=s.match(/^(.+?)\s+(?:is|are|was|were|refers to|means|involves|includes|uses|helps|requires|shows|states|gives|allows|contains|can be|can|occurs|depends on)\s+/i);
  if(m)return m[1].trim();
  return s.split(/[,.]/)[0].trim();
}
const DIRECT_QA={
"Chemical Reactions and Equations":{
vs:[
{q:"What is a reactant?",a:"A reactant is a substance that takes part in a chemical reaction."},
{q:"What is a product?",a:"A product is a new substance formed during a chemical reaction."},
{q:"What is a chemical equation?",a:"A chemical equation represents a reaction using chemical symbols and formulae."},
{q:"What is a balanced chemical equation?",a:"An equation with an equal number of atoms of each element on both sides."},
{q:"State the law of conservation of mass.",a:"Mass can neither be created nor destroyed in a chemical reaction."},
{q:"What is a combination reaction?",a:"A reaction in which two or more substances combine to form one product."},
{q:"What is a decomposition reaction?",a:"A reaction in which one compound breaks down into two or more simpler substances."},
{q:"What is a displacement reaction?",a:"A reaction in which a more reactive element displaces a less reactive element from its compound."},
{q:"What is a double displacement reaction?",a:"A reaction in which two compounds exchange ions to form two new compounds."},
{q:"What is oxidation?",a:"Oxidation is the addition of oxygen or removal of hydrogen from a substance."},
{q:"What is reduction?",a:"Reduction is the removal of oxygen or addition of hydrogen to a substance."},
{q:"What is a redox reaction?",a:"A reaction in which oxidation and reduction occur simultaneously."}
],sh:[
{q:"Why must a chemical equation be balanced?",a:"It must be balanced to obey the law of conservation of mass. The number of atoms of each element must be equal on both sides."},
{q:"How can you identify a decomposition reaction?",a:"A single reactant breaks down into two or more simpler products. It may occur due to heat, light or electricity."},
{q:"Differentiate between combination and decomposition reactions.",a:"In a combination reaction, two or more reactants form one product. In a decomposition reaction, one reactant breaks into two or more products."},
{q:"What is corrosion? Give one example.",a:"Corrosion is the gradual damage of a metal due to its reaction with substances in the environment. Rusting of iron is an example."},
{q:"What is rancidity?",a:"Rancidity is the oxidation of fats and oils that makes food develop an unpleasant smell and taste."},
{q:"What is the difference between oxidation and reduction?",a:"Oxidation involves addition of oxygen or removal of hydrogen. Reduction involves removal of oxygen or addition of hydrogen."}
],lg:[
{q:"Explain the main types of chemical reactions with one example each.",a:"A combination reaction forms one product from two or more reactants, for example 2Mg + O₂ → 2MgO. A decomposition reaction breaks one compound into simpler substances, for example CaCO₃ → CaO + CO₂. In a displacement reaction, a more reactive element replaces a less reactive one, for example Zn + CuSO₄ → ZnSO₄ + Cu. In a double displacement reaction, ions are exchanged between two compounds, for example Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl."},
{q:"Explain oxidation, reduction and redox reaction with an example.",a:"Oxidation is the addition of oxygen or removal of hydrogen, while reduction is the removal of oxygen or addition of hydrogen. In a redox reaction, both occur at the same time. For example, CuO + H₂ → Cu + H₂O: copper oxide loses oxygen and is reduced to copper, while hydrogen gains oxygen and is oxidised to water."}
]
},
"Acids, Bases and Salts":{vs:[
{q:"What is an acid?",a:"An acid produces H⁺ ions in aqueous solution."},{q:"What is a base?",a:"A base produces OH⁻ ions in aqueous solution."},{q:"What does the pH scale measure?",a:"It measures how acidic or basic a solution is."},{q:"What is neutralisation?",a:"Neutralisation is the reaction of an acid with a base to form salt and water."},{q:"What is the chemical name of common salt?",a:"Sodium chloride (NaCl)."}],sh:[
{q:"What does a pH below 7 indicate?",a:"A pH below 7 indicates that a solution is acidic. A lower pH generally means greater acidity."},{q:"Why does dry HCl gas not change dry blue litmus paper?",a:"HCl produces H⁺ ions only in the presence of water. Without water, these ions are not formed, so the litmus colour does not change."},{q:"Name two uses of baking soda.",a:"Baking soda is used in baking powder to make cakes rise and as an ingredient in some antacids."}],lg:[
{q:"Explain the importance of pH in everyday life.",a:"The pH of the stomach is acidic and helps digestion, while excess acid can be relieved with a suitable base. Tooth decay begins when mouth pH falls below about 5.5. Plants also need a suitable soil pH for healthy growth, so acidic soil may be treated with lime."}]
}
};
function directBank(subject,chapter){return DIRECT_QA[chapter]||null}

function qaFromFacts(subject,chapter){
  const direct=directBank(subject,chapter); if(direct) return {vs:direct.vs||[],sh:direct.sh||[],lg:direct.lg||[]};
  if(subject==='Hindi (Sparsh Bhag 2)') return sparshQaFor(subject,chapter);
  if(subject==='Mathematics') return mathQA(chapter);
  const facts=factFor(subject,chapter);
  if(!facts.length) return {vs:[],sh:[],lg:[]};
  // Use each stored fact once; never pad answers or recycle facts to hit a quota.
  const vs=facts.map((fact)=>({q:questionFromFact(fact,subject),a:fact}));
  return {vs,sh:vs.slice(0,Math.min(3,vs.length)),lg:vs.slice(0,Math.min(2,vs.length))};
}
function questionFromFact(fact,subject){
  const f=String(fact).trim();
  const patterns=[
    [/^(.+?) involves (.+)\.?$/i,(_,topic,detail)=>`What does ${topic} involve?`],
    [/^(.+?) is (.+)\.?$/i,(_,topic)=>`What is ${topic}?`],
    [/^(.+?) are (.+)\.?$/i,(_,topic)=>`What are ${topic}?`],
    [/^(.+?) helps (.+)\.?$/i,(_,topic)=>`How does ${topic} help?`],
    [/^(.+?) includes (.+)\.?$/i,(_,topic)=>`What does ${topic} include?`],
    [/^(.+?) can (.+)\.?$/i,(_,topic)=>`How can ${topic} be described?`]
  ];
  for(const [re,make] of patterns){const m=f.match(re);if(m)return make(...m)}
  const first=f.split(/[;:]/)[0].replace(/[.]$/,'');
  return subject==='English'?`What does the chapter state about ${first}?`:`Explain this point briefly: ${first}.`;
}

function makeOptions(correct,others){
  const pool=[correct,...others.filter(x=>x!==correct)];
  const out=[]; for(const x of pool) if(!out.includes(x)&&out.length<4) out.push(x);
  while(out.length<4)out.push('None of these');
  const tagged=out.map((x,i)=>({x,i}));
  for(let i=tagged.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[tagged[i],tagged[j]]=[tagged[j],tagged[i]]}
  return {opts:tagged.map(x=>x.x),correct:tagged.findIndex(x=>x.x===correct)};
}
const DIRECT_MCQ={"Chemical Reactions and Equations":[
{q:"What is a reactant?",opts:["A substance that takes part in a reaction","A substance formed after a reaction","A catalyst only","A type of chemical symbol"],correct:0},
{q:"Which law is obeyed by a balanced chemical equation?",opts:["Law of conservation of mass","Law of gravitation","Ohm's law","Law of reflection"],correct:0},
{q:"Which reaction forms a single product from two or more reactants?",opts:["Combination reaction","Decomposition reaction","Displacement reaction","Double displacement reaction"],correct:0},
{q:"In which reaction does one compound break into simpler substances?",opts:["Decomposition","Combination","Neutralisation only","Precipitation only"],correct:0},
{q:"What is a product in a chemical reaction?",opts:["A substance formed in the reaction","A substance used up only","A chemical apparatus","An unbalanced atom"],correct:0},
{q:"Rusting of iron is an example of:",opts:["Corrosion","Rancidity","Neutralisation","Decomposition"],correct:0},
{q:"Oxidation and reduction occurring together is called:",opts:["A redox reaction","A combination reaction only","A physical change","A neutralisation reaction"],correct:0},
{q:"Rancidity is mainly associated with oxidation of:",opts:["Fats and oils","Pure water","Common salt","Iron nails only"],correct:0}
]};

function nonMathMCQs(subject,chapter){
  if(DIRECT_MCQ[chapter]) return DIRECT_MCQ[chapter].map(x=>({...x,opts:x.opts.slice()}));
  if(subject==='Hindi (Sparsh Bhag 2)') return sparshMcqFor(subject,chapter);
  const facts=factFor(subject,chapter); if(!facts.length)return [];
  // Four distinct concept checks maximum. No generic stem cycling and no repeated padding.
  return facts.map((correct,i)=>{
    const topic=conceptFromFact(correct);
    const opts=makeOptions(correct,facts.filter((_,j)=>j!==i));
    return {q:subject==='English'?`Which statement correctly describes ${topic}?`:`Which statement correctly describes ${topic}?`,...opts};
  });
}



function mathQA(ch){
 const a=[]; const add=(q,ans)=>a.push({q,a:ans});
 switch(ch){
 case 'Real Numbers':
  add('Use Euclid’s division algorithm to find the HCF of 135 and 225.','225 = 135×1 + 90; 135 = 90×1 + 45; 90 = 45×2. Therefore HCF = 45.');
  add('Find the LCM of 84 and 126 using the HCF.','HCF(84,126)=42. Hence LCM=(84×126)/42=252.');
  add('Check whether 13/160 has a terminating decimal expansion.','160=2⁵×5, so after reduction the denominator has only 2 and 5 as prime factors. Therefore the decimal expansion terminates.');
  add('Find the HCF of 867 and 255.','867=255×3+102; 255=102×2+51; 102=51×2. Hence HCF=51.');
  add('Express 0.375 as a fraction in lowest terms.','0.375=375/1000=3/8.');
  add('Find the LCM of 72 and 90.','HCF=18, so LCM=(72×90)/18=360.');
  add('Prove that √5 is irrational.','Assume √5=p/q in lowest terms. Then 5q²=p², so 5 divides p; write p=5k. This gives q²=5k², so 5 divides q, contradicting lowest terms. Hence √5 is irrational.');
  add('Find HCF(391,299) by Euclid’s algorithm.','391=299+92; 299=92×3+23; 92=23×4. Therefore HCF=23.');
  add('Does 17/125 have a terminating decimal expansion?','125=5³, so the denominator contains only 5. Therefore it terminates; 17/125=0.136.');
  add('Find the HCF of 306 and 657.','657=306×2+45; 306=45×6+36; 45=36+9; 36=9×4. HCF=9.');
  add('If HCF(a,b)=12 and a×b=8640, find LCM(a,b).','LCM=(a×b)/HCF=8640/12=720.');
  add('Write the prime factorisation of 540.','540=2²×3³×5.');
  add('Find HCF and LCM of 18, 24 and 30.','HCF=6 and LCM=360.');
  add('Show that 3+2√5 is irrational.','If it were rational, subtracting 3 and dividing by 2 would make √5 rational, which is impossible.');
  add('Find the greatest number that divides 245 and 1029 leaving remainders 5 and 9 respectively.','Required divisor divides 240 and 1020. HCF(240,1020)=60.');
  add('Find the least positive integer divisible by 12, 18 and 30.','LCM=180.');
  add('Find the HCF of 1001 and 143.','1001=143×7, so HCF=143.');
  add('Convert 7/16 into decimal form.','7/16=0.4375.');
  add('Why does 29/250 terminate?','250=2×5³, containing no prime factor other than 2 and 5, so the decimal terminates.');
  add('Find HCF(102,68).','102=68+34 and 68=34×2, so HCF=34.');
  add('Find LCM(45,60).','HCF=15, so LCM=(45×60)/15=180.');
  add('Is 7/24 terminating?','24=2³×3 contains prime factor 3, so 7/24 has a non-terminating recurring decimal expansion.');
  add('Find the HCF of 144 and 216.','216=144+72 and 144=72×2, so HCF=72.');
  add('Find the least number divisible by 8, 12 and 15.','LCM=120.');
  return {vs:a.slice(0,12),sh:a.slice(12,20),lg:a.slice(20,24)};
 case 'Polynomials':
  add('Find the zeroes of x²−5x+6.','x²−5x+6=(x−2)(x−3), so the zeroes are 2 and 3.');
  add('For 2x²−7x+3, find the sum and product of zeroes.','Sum=−b/a=7/2 and product=c/a=3/2.');
  add('Form a quadratic polynomial whose zeroes are 4 and −3.','p(x)=(x−4)(x+3)=x²−x−12.');
  add('If one zero of 3x²+kx−4 is 1, find k.','3+k−4=0, so k=1.');
  add('Find the zeroes of x²−9.','x²−9=(x−3)(x+3), so zeroes are 3 and −3.');
  add('If α,β are zeroes of x²−8x+15, find α+β and αβ.','α+β=8 and αβ=15.');
  add('Check the relation between zeroes and coefficients for 2x²−3x−5.','Zeroes are 5/2 and −1; their sum is 3/2=−b/a and product is −5/2=c/a.');
  add('Find a quadratic polynomial with zeroes 1/2 and 3.','(x−1/2)(x−3)=x²−7x/2+3/2; multiplying by 2 gives 2x²−7x+3.');
  add('Find the zeroes of 4x²−12x+9.','It is (2x−3)², so the equal zeroes are 3/2 and 3/2.');
  add('If the sum of zeroes is 6 and product is 8, write a monic quadratic polynomial.','x²−6x+8.');
  add('Find k if 2 is a zero of x²+kx−6.','4+2k−6=0, so k=1.');
  add('For x²+7x+10, identify the zeroes and verify their sum.','Zeroes are −5 and −2; their sum is −7, equal to −b/a.');
  add('Find the polynomial whose zeroes are −2 and −5.','(x+2)(x+5)=x²+7x+10.');
  add('If αβ=−6 and α+β=5, form the quadratic polynomial.','x²−5x−6.');
  add('Find the zeroes of 6x²+x−2.','6x²+x−2=(3x+2)(2x−1), so zeroes are −2/3 and 1/2.');
  add('If one zero of x²−px+12 is 3, find p.','Product of zeroes is 12, so the other zero is 4; their sum is 7, hence p=7.');
  add('Find the value of k if x−2 is a factor of x²+kx−8.','Substitute x=2: 4+2k−8=0, so k=2.');
  add('Find the zeroes of x²+x−12.','(x+4)(x−3)=0, so zeroes are −4 and 3.');
  add('For 3x²−5x−2, calculate the product of zeroes.','Product=c/a=−2/3.');
  add('A polynomial has zeroes 2 and 5. What is its sum of zeroes?','2+5=7.');
  add('A polynomial has zeroes −1 and 6. Find the product.','(−1)×6=−6.');
  add('Find the quadratic polynomial with zeroes 7 and 2.','(x−7)(x−2)=x²−9x+14.');
  add('If α and β are zeroes of 5x²−11x+2, find α+β.','α+β=11/5.');
  add('If α and β are zeroes of 4x²+3x−1, find αβ.','αβ=−1/4.');
  return {vs:a.slice(0,12),sh:a.slice(12,20),lg:a.slice(20,24)};
 default:
  return genericMathQA(ch);
 }
}
function genericMathQA(ch){
 const base=factFor('Mathematics',ch); const out=[];
 for(let i=0;i<24;i++)out.push({q:`Solve the ${ch} problem: ${base[i%base.length]}`,a:base[i%base.length]});
 return {vs:out.slice(0,12),sh:out.slice(12,20),lg:out.slice(20,24)};
}
function mathMCQs(ch){
 const d=mathQA(ch); const all=[...d.vs,...d.sh,...d.lg];
 const out=[];
 for(let i=0;i<25;i++){
  const item=all[i%all.length];
  const ans=item.a.split(/[.;]/)[0].trim();
  const opts=[ans, 'The given data is insufficient to solve the problem.','The result is obtained by reversing the required operation.','The result changes only because of the unit.'];
  const j=i%4; [opts[0],opts[j]]=[opts[j],opts[0]];
  out.push({q:item.q,opts,correct:j});
 }
 return out;
}
function makeMCQs(subject,chapter,n=25){
 if(subject==='Mathematics')return mathMCQs(chapter).slice(0,n);
 return nonMathMCQs(subject,chapter).slice(0,n);
}
function answersFor(subject,chapter){return qaFromFacts(subject,chapter)}
const INFOGRAPHICS={
  "Science": {
    "Chemical Reactions and Equations": [
      "assets/infographics/science-ch1-1.png",
      "assets/infographics/science-ch1-2.png",
      "assets/infographics/science-ch1-3.png",
      "assets/infographics/science-ch1-4.png",
      "assets/infographics/science-ch1-5.png",
      "assets/infographics/science-ch1-6.png"
    ],
    "Acids, Bases and Salts": [
      "assets/infographics/science-ch2-1.png",
      "assets/infographics/science-ch2-2.png",
      "assets/infographics/science-ch2-3.png",
      "assets/infographics/science-ch2-4.png",
      "assets/infographics/science-ch2-5.png"
    ],  // <--- Yahan comma (,) hona zaroori hai (jo add kar diya gaya hai)
    "Metals and Non-metals": [
      "assets/infographics/science-ch3-1.png",
      "assets/infographics/science-ch3-2.png",
      "assets/infographics/science-ch3-3.png",
      "assets/infographics/science-ch3-4.png",
      "assets/infographics/science-ch3-5.png"
    ],
    "Carbon and its Compounds": [
      "assets/infographics/science-ch4-1.png",
      "assets/infographics/science-ch4-2.png",
      "assets/infographics/science-ch4-3.png",
      "assets/infographics/science-ch4-4.png",
      "assets/infographics/science-ch4-5.png"
    ],
    "Life Processes": [
      "assets/infographics/science-ch6-1.png",
      "assets/infographics/science-ch6-2.png",
      "assets/infographics/science-ch6-3.png",
      "assets/infographics/science-ch6-4.png",
      "assets/infographics/science-ch6-5.png",
      "assets/infographics/science-ch6-6.png",
      "assets/infographics/science-ch6-7.png",
      "assets/infographics/science-ch6-8.png"
    ],
    "How do Organisms Reproduce?": [
      "assets/infographics/science-ch7-1.png",
      "assets/infographics/science-ch7-2.png",
      "assets/infographics/science-ch7-3.png",
      "assets/infographics/science-ch7-4.png",
      "assets/infographics/science-ch7-5.png",
      "assets/infographics/science-ch7-6.png",
      "assets/infographics/science-ch7-7.png",
      "assets/infographics/science-ch7-8.png"
    ],
    "Control and Coordination": [
      "assets/infographics/science-ch8-1.png",
      "assets/infographics/science-ch8-2.png",
      "assets/infographics/science-ch8-3.png",
      "assets/infographics/science-ch8-4.png",
      "assets/infographics/science-ch8-5.png",
      "assets/infographics/science-ch8-6.png",
      "assets/infographics/science-ch8-7.png",
      "assets/infographics/science-ch8-8.png"
      ],
    "Heredity": [
      "assets/infographics/science-ch9-1.png",
      "assets/infographics/science-ch9-2.png",
      "assets/infographics/science-ch9-3.png",
      "assets/infographics/science-ch9-4.png"
      ],
    "Light – Reflection and Refraction": [
      "assets/infographics/science-ch10-1.png",
      "assets/infographics/science-ch10-2.png",
      "assets/infographics/science-ch10-3.png",
      "assets/infographics/science-ch10-4.png",
      "assets/infographics/science-ch10-5.png",
      "assets/infographics/science-ch10-6.png",
      "assets/infographics/science-ch10-7.png"
      ],
    "The Human Eye and the Colourful World": [
      "assets/infographics/science-ch11-1.png",
      "assets/infographics/science-ch11-2.png",
      "assets/infographics/science-ch11-3.png",
      "assets/infographics/science-ch11-4.png",
      "assets/infographics/science-ch11-5.png"
      ],
    "Electricity": [
      "assets/infographics/science-ch12-1.png",
      "assets/infographics/science-ch12-2.png",
      "assets/infographics/science-ch12-3.png",
      "assets/infographics/science-ch12-4.png",
      "assets/infographics/science-ch12-5.png"
      ]
  }
};

/* Correct Class 10 Hindi Course-B textbook: Sparsh Bhag 2. Original short study questions; not copied textbook passages. */
SYLLABUS['Hindi (Sparsh Bhag 2)'] = [
'साखी','पद','बिहारी के दोहे','मनुष्यता','पर्वत प्रदेश में पावस','तोप','कर चले हम फ़िदा','आत्मत्राण',
'बड़े भाई साहब','डायरी का एक पन्ना','तताँरा-वामीरो कथा','तीसरी कसम के शिल्पकार शैलेंद्र','गिरगिट','अब कहाँ दूसरे के दुख से दुखी होने वाले','पतझर में टूटी पत्तियाँ','कारतूस'
];
const SPARSH_DATA = {
'साखी': {
vs:[
['कबीर की साखियों का मुख्य संदेश क्या है?','कबीर बाहरी आडंबर छोड़कर सच्चे ज्ञान, प्रेम और आत्मचिंतन पर बल देते हैं।'],
['कबीर मीठी वाणी का महत्त्व क्यों बताते हैं?','मधुर वाणी दूसरों को सुख देती है और बोलने वाले के मन को भी शांत रखती है।'],
['कबीर के अनुसार सच्चा ज्ञानी कौन है?','जो अपने दोष पहचानकर उन्हें दूर करने का प्रयास करता है, वही सच्चे ज्ञान की ओर बढ़ता है।'],
['कबीर अहंकार से दूर रहने की सीख क्यों देते हैं?','अहंकार मनुष्य को सत्य और दूसरों के अनुभव से दूर कर देता है।'],
['साखियों में गुरु का क्या महत्त्व है?','गुरु सही मार्ग दिखाता है और अज्ञान दूर करने में सहायता करता है।']
], mcq:[
['कबीर की साखियों में किस पर अधिक बल है?',['बाहरी दिखावा','आत्मज्ञान और सदाचार','धन-संग्रह','युद्ध-कौशल'],1],
['मधुर वाणी का प्रभाव क्या होता है?',['मन में कटुता बढ़ती है','दूसरों को दुख होता है','मन को शांति मिलती है','विवाद अनिवार्य होता है'],2],
['कबीर किस प्रवृत्ति से बचने की सीख देते हैं?',['विनम्रता','आत्मचिंतन','अहंकार','सत्य'],2],
['साखी का प्रमुख उद्देश्य क्या है?',['जीवनोपयोगी सीख देना','यात्रा-वर्णन करना','हास्य नाटक लिखना','युद्ध का वर्णन करना'],0],
['सच्चे ज्ञान की दिशा में पहला कदम क्या है?',['दूसरों की निंदा','अपने दोष पहचानना','धन बढ़ाना','दिखावा करना'],1],
['कबीर की भाषा का प्रमुख गुण क्या है?',['सरल और प्रभावशाली','केवल वैज्ञानिक','अत्यंत कठिन फारसी','केवल अंग्रेज़ी'],0]
]},
'पद': {vs:[
['मीरा के पदों में किसके प्रति भक्ति व्यक्त हुई है?','मीरा के पदों में श्रीकृष्ण के प्रति गहरा प्रेम और समर्पण व्यक्त हुआ है।'],
['मीरा कृष्ण को अपना सर्वस्व क्यों मानती हैं?','कृष्ण उनके आराध्य, प्रिय और जीवन का सबसे बड़ा सहारा हैं।'],
['मीरा की भक्ति की विशेषता क्या है?','उनकी भक्ति व्यक्तिगत, प्रेमपूर्ण और पूर्ण समर्पण से भरी है।'],
['मीरा सांसारिक बंधनों से ऊपर क्यों उठती हैं?','कृष्ण-भक्ति उनके लिए सामाजिक दबावों और सांसारिक मोह से अधिक महत्त्वपूर्ण है।'],
['मीरा के पदों का केंद्रीय भाव क्या है?','कृष्ण के प्रति अनन्य प्रेम, विरह और भक्ति।']
],mcq:[
['मीरा के पदों के आराध्य कौन हैं?',['राम','श्रीकृष्ण','शिव','बुद्ध'],1],['मीरा की भक्ति का मुख्य स्वर क्या है?',['क्रोध','व्यापार','प्रेम और समर्पण','वीरता'],2],['मीरा किसे अपना जीवन-सहारा मानती हैं?',['राजमहल','धन','कृष्ण','सेना'],2],['मीरा के पदों में कौन-सा भाव प्रमुख है?',['भक्ति','वैज्ञानिक जिज्ञासा','राजनीतिक व्यंग्य','प्रकृति का भय'],0],['मीरा के लिए सांसारिक प्रतिष्ठा से अधिक क्या महत्त्वपूर्ण है?',['आभूषण','कृष्ण-भक्ति','राजपद','धन'],1],['मीरा की कविता किस पर केंद्रित है?',['कृष्ण के प्रति प्रेम','औद्योगिक विकास','युद्ध नीति','नगर नियोजन'],0]
]},
'बिहारी के दोहे':{vs:[
['बिहारी के दोहों की प्रमुख विशेषता क्या है?','कम शब्दों में गहरी बात और भावपूर्ण चित्र प्रस्तुत करना।'],
['बिहारी ने प्रेम-भाव को किस शैली में व्यक्त किया है?','संक्षिप्त, संकेतपूर्ण और कलात्मक भाषा में।'],
['बिहारी की भाषा का प्रमुख रूप क्या है?','उनके दोहों में मुख्यतः ब्रजभाषा का सुंदर प्रयोग मिलता है।'],
['बिहारी के दोहों में अलंकारों का क्या योगदान है?','अलंकार भाव और चित्र को प्रभावशाली तथा आकर्षक बनाते हैं।'],
['दोहों से पाठक को क्या अनुभव होता है?','थोड़े शब्दों में भावों की गहराई और काव्य-कौशल का अनुभव होता है।']
],mcq:[
['बिहारी की काव्य-शैली का प्रमुख गुण क्या है?',['विस्तृत गद्य','कम शब्दों में गहरी बात','केवल संवाद','वैज्ञानिक रिपोर्ट'],1],['बिहारी के दोहों की भाषा मुख्यतः कौन-सी है?',['ब्रजभाषा','तमिल','अंग्रेज़ी','पंजाबी'],0],['अलंकार कविता को क्या देते हैं?',['नीरसता','अस्पष्टता ही','सौंदर्य और प्रभाव','गद्य रूप'],2],['दोहा किस प्रकार की रचना है?',['काव्य छंद','नाटक का दृश्य','पत्र','उपन्यास'],0],['बिहारी के दोहों में भाव कैसे व्यक्त होते हैं?',['लंबे विवरण से ही','संक्षिप्त और संकेतपूर्ण ढंग से','केवल चित्रों से','सूत्रों से'],1],['बिहारी का काव्य किस गुण के लिए प्रसिद्ध है?',['शब्द-संयम','तकनीकी निर्देश','युद्ध-वर्णन','समाचार शैली'],0]
]},
'मनुष्यता':{vs:[
['कवि के अनुसार सच्चा मनुष्य कौन है?','जो दूसरों के दुख को समझे और उनके हित के लिए काम करे।'],
['मनुष्यता कविता का मुख्य संदेश क्या है?','परोपकार, करुणा, त्याग और विश्व-बंधुत्व ही सच्ची मनुष्यता के आधार हैं।'],
['मनुष्य को दूसरों के लिए जीना क्यों चाहिए?','क्योंकि सहयोग और परोपकार से जीवन समाज के लिए उपयोगी बनता है।'],
['कविता में त्याग का क्या महत्त्व है?','त्याग व्यक्ति को स्वार्थ से ऊपर उठाकर दूसरों के काम आने की प्रेरणा देता है।'],
['कवि किस प्रकार की अमरता की बात करता है?','अच्छे कर्मों और परोपकार से लोगों के हृदय में जीवित रहने की।']
],mcq:[
['मनुष्यता कविता का केंद्रीय मूल्य क्या है?',['स्वार्थ','परोपकार','ईर्ष्या','अहंकार'],1],['सच्चा मनुष्य दूसरों के दुख के प्रति कैसा होता है?',['उदासीन','उपहास करने वाला','संवेदनशील','क्रोधित'],2],['कविता किस भावना को बढ़ावा देती है?',['विश्व-बंधुत्व','भेदभाव','प्रतिशोध','लालच'],0],['अच्छे कर्म मनुष्य को क्या दिलाते हैं?',['केवल धन','स्थायी सम्मान','डर','अकेलापन'],1],['त्याग का संबंध किससे है?',['स्वार्थ बढ़ाने से','दूसरों के हित से','दिखावे से','आलस्य से'],1],['कविता के अनुसार जीवन की सार्थकता किसमें है?',['केवल अपने लिए जीना','मानवता की सेवा','दूसरों को हराना','संग्रह करना'],1]
]},
'पर्वत प्रदेश में पावस':{vs:[
['कविता में किस ऋतु का चित्रण है?','वर्षा ऋतु का, जब पर्वतीय प्रदेश का रूप पल-पल बदलता है।'],
['वर्षा में पर्वतों का रूप कैसा दिखाई देता है?','बादलों, झरनों, हरियाली और धुंध से पर्वत अत्यंत सुंदर और परिवर्तनशील लगते हैं।'],
['कवि ने प्रकृति को सजीव कैसे बनाया है?','मानवीकरण और दृश्यात्मक बिंबों के माध्यम से प्रकृति को गतिशील रूप दिया है।'],
['कविता में बादलों और झरनों का क्या योगदान है?','वे पर्वतीय दृश्य की सुंदरता, गति और रहस्य को उभारते हैं।'],
['कविता का प्रमुख आकर्षण क्या है?','वर्षा के कारण बदलते पर्वतीय दृश्यों का चित्रमय वर्णन।']
],mcq:[
['कविता में किस प्राकृतिक परिवेश का वर्णन है?',['रेगिस्तान','पर्वतीय प्रदेश','समुद्र का तल','महानगर'],1],['पावस शब्द का अर्थ क्या है?',['ग्रीष्म','वर्षा ऋतु','शीत ऋतु','वसंत'],1],['पर्वतीय दृश्य में परिवर्तन किस कारण आता है?',['वर्षा और बादलों से','कारखानों से','युद्ध से','बर्फीले रेगिस्तान से'],0],['कवि प्रकृति का चित्रण किस रूप में करता है?',['स्थिर और निर्जीव','सजीव और गतिशील','केवल भयावह','केवल हास्यपूर्ण'],1],['कविता में झरने किसका हिस्सा हैं?',['प्राकृतिक सौंदर्य','शहरी यातायात','कृषि मशीनरी','ऐतिहासिक युद्ध'],0],['कविता का मुख्य रसात्मक प्रभाव क्या है?',['प्रकृति-सौंदर्य का अनुभव','राजनीतिक बहस','वैज्ञानिक प्रयोग','व्यापार-वर्णन'],0]
]},
'तोप':{vs:[
['कविता में तोप किसका प्रतीक है?','पुरानी सत्ता और दमनकारी शक्ति का, जो समय के साथ निष्प्रभावी हो जाती है।'],
['तोप के पास बच्चे और चिड़ियाँ क्या संकेत देते हैं?','जीवन की सहजता और यह कि हिंसक शक्ति हमेशा स्थायी नहीं रहती।'],
['कवि इतिहास की शक्ति के बारे में क्या बताता है?','सत्ता का घमंड समय के आगे टिक नहीं पाता।'],
['कविता में व्यंग्य कैसे पैदा होता है?','कभी भय पैदा करने वाली तोप का अब बेअसर वस्तु बन जाना व्यंग्य उत्पन्न करता है।'],
['तोप कविता की सीख क्या है?','हिंसा और सत्ता का अहंकार स्थायी नहीं; जीवन आगे बढ़ता रहता है।']
],mcq:[
['तोप मुख्यतः किसका प्रतीक है?',['दमनकारी सत्ता','प्रेम','खेती','शिक्षा'],0],['तोप के पास चिड़ियों का होना क्या दिखाता है?',['जीवन की सहजता','युद्ध का विस्तार','भय का बढ़ना','औद्योगिक विकास'],0],['कविता में किस पर व्यंग्य है?',['सत्ता के घमंड पर','प्रकृति पर','बच्चों पर','पढ़ाई पर'],0],['तोप की वर्तमान स्थिति क्या बताती है?',['शक्ति सदा रहती है','समय के साथ सत्ता का प्रभाव घट सकता है','इतिहास बदलता नहीं','हिंसा हमेशा जीतती है'],1],['कविता में बच्चे किसका संकेत हैं?',['जीवन की निरंतरता','राजदरबार','सेना','कारखाना'],0],['कविता का प्रमुख स्वर क्या है?',['व्यंग्यात्मक','वैज्ञानिक','आत्मकथात्मक','रहस्य-रोमांच'],0]
]},
'कर चले हम फ़िदा':{vs:[
['कविता में सैनिक देशवासियों से क्या अपेक्षा करते हैं?','वे चाहते हैं कि देशवासी देश की रक्षा और सम्मान की जिम्मेदारी आगे निभाएँ।'],
['कविता का मुख्य भाव क्या है?','देशभक्ति, बलिदान और मातृभूमि के प्रति कर्तव्य।'],
['सैनिक अपना जीवन किसलिए समर्पित करते हैं?','देश और देशवासियों की स्वतंत्रता तथा सुरक्षा के लिए।'],
['कविता युवाओं को क्या प्रेरणा देती है?','देश के प्रति जिम्मेदार रहने और आवश्यकता पड़ने पर त्याग करने की।'],
['कविता में बलिदान का अर्थ क्या है?','व्यक्तिगत हित से ऊपर उठकर देश की रक्षा के लिए समर्पित होना।']
],mcq:[
['कविता का केंद्रीय भाव क्या है?',['देशभक्ति','प्रकृति-चित्रण','हास्य','व्यापार'],0],['सैनिक देशवासियों को क्या सौंपते हैं?',['देश की रक्षा का दायित्व','व्यापार का काम','कृषि भूमि','राजसिंहासन'],0],['कविता में किस भावना की प्रधानता है?',['बलिदान','ईर्ष्या','लालच','निराशा'],0],['सैनिक किसके लिए समर्पित हैं?',['मातृभूमि','केवल निजी लाभ','विदेशी व्यापार','मनोरंजन'],0],['कविता पाठक में क्या जगाती है?',['कर्तव्य-बोध','आलस्य','उदासीनता','भेदभाव'],0],['देशप्रेम का उचित रूप क्या है?',['जिम्मेदारी निभाना','केवल नारे लगाना','दूसरों को नीचा दिखाना','नियम तोड़ना'],0]
]},
'आत्मत्राण':{vs:[
['कवि ईश्वर से किस प्रकार की सहायता चाहता है?','वह संकट मिटाने के बजाय संकटों का सामना करने का साहस चाहता है।'],
['आत्मत्राण का केंद्रीय संदेश क्या है?','आत्मबल, निर्भयता और कठिनाइयों से जूझने की क्षमता विकसित करना।'],
['कवि दुखों से पूरी तरह मुक्ति क्यों नहीं माँगता?','वह चाहता है कि दुख आने पर उसका मन कमजोर न पड़े और वह उनका सामना कर सके।'],
['कविता में आत्मविश्वास का क्या महत्त्व है?','आत्मविश्वास व्यक्ति को विपरीत परिस्थितियों में दृढ़ बनाए रखता है।'],
['कवि किस गुण को सबसे अधिक महत्त्व देता है?','भीतर की शक्ति और संकटों का धैर्यपूर्वक सामना करने के साहस को।']
],mcq:[
['कवि ईश्वर से मुख्यतः क्या माँगता है?',['संकटों से लड़ने का साहस','धन','प्रसिद्धि','दूसरों पर नियंत्रण'],0],['आत्मत्राण का अर्थ किसके निकट है?',['आत्मबल से रक्षा','दूसरों पर निर्भरता','दिखावा','आलस्य'],0],['कवि कठिनाइयों के समय कैसा रहना चाहता है?',['दृढ़ और निर्भय','निराश','दूसरों को दोष देने वाला','उदासीन'],0],['कविता किस गुण को बढ़ाती है?',['आत्मविश्वास','लालच','ईर्ष्या','अहंकार'],0],['कवि दुखों के बारे में क्या चाहता है?',['उनसे जूझने की शक्ति','हमेशा उनसे भागना','दूसरों को दोष देना','किसी का नुकसान'],0],['कविता का प्रमुख संदेश क्या है?',['आंतरिक शक्ति विकसित करना','केवल भाग्य पर निर्भर रहना','सफलता से डरना','कर्तव्य छोड़ना'],0]
]},
'बड़े भाई साहब':{vs:[
['बड़े भाई साहब पढ़ाई को लेकर कैसे थे?','वे अनुशासनप्रिय और मेहनत पर विश्वास करने वाले थे; छोटे भाई को भी गंभीरता से पढ़ने की सलाह देते थे।'],
['छोटा भाई पढ़ाई के साथ क्या करना पसंद करता था?','वह खेलना और बाहर की गतिविधियों में समय बिताना पसंद करता था।'],
['बड़े भाई साहब बार-बार समझाते क्यों थे?','वे छोटे भाई के भविष्य की चिंता करते थे और चाहते थे कि वह पढ़ाई में लापरवाह न बने।'],
['कहानी में शिक्षा-व्यवस्था पर क्या संकेत मिलता है?','केवल रटने और परीक्षा-केंद्रित पढ़ाई से वास्तविक समझ की गारंटी नहीं होती।'],
['कहानी का हास्य किससे उत्पन्न होता है?','बड़े भाई की लंबी नसीहतों और छोटे भाई की खेलप्रियता के अंतर से।']
],mcq:[
['बड़े भाई साहब किस बात पर जोर देते थे?',['अनुशासन और पढ़ाई','केवल खेल','यात्रा','व्यापार'],0],['छोटे भाई को सबसे अधिक क्या आकर्षित करता था?',['खेल-कूद','लंबे भाषण','परीक्षा','नकल'],0],['बड़े भाई की डाँट के पीछे मुख्य भावना क्या थी?',['छोटे भाई की चिंता','ईर्ष्या','उदासीनता','मजाक उड़ाना'],0],['कहानी किस पर हल्का व्यंग्य करती है?',['रटंत और परीक्षा-केंद्रित पढ़ाई','प्रकृति','यात्रा','संगीत'],0],['कहानी का प्रमुख प्रभाव क्या है?',['हास्य के साथ सीख','भयावहता','रहस्य','वीर रस'],0],['दोनों भाइयों के स्वभाव में मुख्य अंतर क्या है?',['गंभीरता और खेलप्रियता','दोनों का समान स्वभाव','दोनों का व्यापार प्रेम','दोनों की उदासीनता'],0]
]},
'डायरी का एक पन्ना':{vs:[
['डायरी में किस ऐतिहासिक दिन का वर्णन है?','26 जनवरी 1931 को कलकत्ता में स्वतंत्रता दिवस मनाने के प्रयासों और जुलूसों का वर्णन है।'],
['लोगों में किस भावना की प्रधानता थी?','देशभक्ति, साहस और स्वतंत्रता प्राप्त करने का उत्साह।'],
['अंग्रेज़ी शासन ने जुलूसों के साथ कैसा व्यवहार किया?','प्रदर्शनकारियों को रोकने और दबाने के लिए पुलिस ने कठोरता दिखाई।'],
['डायरी शैली की विशेषता क्या है?','घटनाओं और अनुभवों को दिनांक तथा व्यक्तिगत दृष्टिकोण के साथ दर्ज करना।'],
['पाठ से स्वतंत्रता आंदोलन के बारे में क्या पता चलता है?','आम लोग भी जोखिम उठाकर राष्ट्रीय आंदोलन में भाग ले रहे थे।']
],mcq:[
['पाठ में वर्णित प्रमुख तारीख कौन-सी है?',['26 जनवरी 1931','15 अगस्त 1947','2 अक्टूबर 1869','26 जनवरी 1950'],0],['डायरी में किस भावना का चित्रण है?',['देशभक्ति','लालच','ईर्ष्या','मनोरंजन'],0],['प्रदर्शनकारियों को रोकने का प्रयास किसने किया?',['औपनिवेशिक पुलिस','किसानों ने','विद्यार्थियों ने','व्यापारियों ने'],0],['डायरी शैली में क्या दर्ज होता है?',['व्यक्तिगत अनुभव और घटनाएँ','केवल काल्पनिक संवाद','वैज्ञानिक सूत्र','कानूनों की सूची'],0],['पाठ किस दौर से जुड़ा है?',['भारतीय स्वतंत्रता आंदोलन','औद्योगिक क्रांति','मुगल स्थापत्य','हरित क्रांति'],0],['लोगों का जुलूस किस उद्देश्य से था?',['स्वतंत्रता दिवस मनाना','व्यापार मेला','खेल प्रतियोगिता','फसल कटाई'],0]
]},
'तताँरा-वामीरो कथा':{vs:[
['तताँरा और वामीरो के प्रेम में बाधा क्या थी?','समुदाय की रूढ़ परंपराएँ और सामाजिक निषेध उनके मिलन में बाधा बने।'],
['कथा में तताँरा का स्वभाव कैसा है?','वह साहसी, संवेदनशील और प्रेम के प्रति समर्पित पात्र है।'],
['कथा का दुखद परिणाम किस बात की ओर संकेत करता है?','अनुचित सामाजिक बंधन लोगों के जीवन को दुखद बना सकते हैं।'],
['लोककथा की प्रमुख विशेषता क्या है?','स्थानीय मान्यताओं, परंपराओं और कल्पनात्मक घटनाओं के माध्यम से संदेश देना।'],
['कथा का मुख्य संदेश क्या है?','मानवीय भावनाओं का सम्मान करना चाहिए और रूढ़ियों पर विचार करना चाहिए।']
],mcq:[
['तताँरा-वामीरो कथा किस विधा की रचना है?',['लोककथा','वैज्ञानिक लेख','यात्रा-वृत्तांत','जीवनी'],0],['प्रेमियों के मिलन में बाधा किससे आती है?',['रूढ़ सामाजिक परंपराओं से','प्राकृतिक विज्ञान से','व्यापार से','परीक्षा से'],0],['तताँरा का प्रमुख गुण क्या है?',['साहस','कायरता','लालच','उदासीनता'],0],['कथा किस समस्या पर विचार कराती है?',['रूढ़ियों का प्रभाव','तकनीकी विकास','शहरी यातायात','खेती की विधि'],0],['लोककथाएँ अक्सर किसे दर्शाती हैं?',['स्थानीय परंपराएँ और मान्यताएँ','केवल गणितीय नियम','आधुनिक विज्ञापन','वैज्ञानिक प्रयोग'],0],['कथा का मानवीय संदेश क्या है?',['भावनाओं का सम्मान','भेदभाव को बढ़ाना','संवाद से बचना','रूढ़ि को प्रश्नहीन मानना'],0]
]},
'तीसरी कसम के शिल्पकार शैलेंद्र':{vs:[
['शैलेंद्र किस रूप में प्रसिद्ध थे?','वे संवेदनशील गीतकार थे जिनके गीतों में मानवीय भावनाएँ और जीवन की सच्चाई दिखाई देती है।'],
['फिल्म तीसरी कसम का निर्माण शैलेंद्र के लिए कैसा अनुभव रहा?','फिल्म के प्रति कलात्मक लगाव के बावजूद उन्हें आर्थिक कठिनाइयों और व्यावसायिक असफलता का सामना करना पड़ा।'],
['शैलेंद्र की कला की विशेषता क्या थी?','सरल भाषा में गहरी संवेदना और आम जीवन के अनुभव व्यक्त करना।'],
['शैलेंद्र को शिल्पकार क्यों कहा गया है?','क्योंकि उन्होंने अपने गीतों और फिल्म निर्माण में कलात्मक ईमानदारी दिखाई।'],
['पाठ व्यावसायिक सफलता और कला के संबंध में क्या बताता है?','सच्ची कलात्मक रचना जरूरी नहीं कि तुरंत आर्थिक सफलता भी प्राप्त करे।']
],mcq:[
['शैलेंद्र मुख्यतः किस क्षेत्र से जुड़े थे?',['गीत-लेखन और फिल्म','खेल','चिकित्सा','कृषि'],0],['तीसरी कसम के प्रति शैलेंद्र का दृष्टिकोण कैसा था?',['कलात्मक और भावनात्मक','केवल लाभ कमाने वाला','उदासीन','विरोधी'],0],['शैलेंद्र के गीतों की विशेषता क्या थी?',['मानवीय संवेदना','केवल कठिन शब्द','वैज्ञानिक आँकड़े','राजकीय आदेश'],0],['पाठ किस अंतर को दिखाता है?',['कला और व्यावसायिक सफलता','खेती और मौसम','शहर और परिवहन','खेल और शिक्षा'],0],['शैलेंद्र को किस कारण याद किया जाता है?',['कलात्मक ईमानदारी','राजनीतिक पद','वैज्ञानिक खोज','खेल रिकॉर्ड'],0],['तीसरी कसम की कहानी का आधार किस साहित्यिक कृति से जुड़ा है?',['मारे गए गुलफाम','गोदान','गबन','निर्मला'],0]
]},
'गिरगिट':{vs:[
['ओचुमेलॉव का व्यवहार बार-बार क्यों बदलता है?','वह मालिक की हैसियत जानकर अपना फैसला बदलता है और शक्तिशाली लोगों से डरता है।'],
['कहानी का शीर्षक गिरगिट क्यों सार्थक है?','गिरगिट की तरह अधिकारी भी परिस्थिति और लाभ के अनुसार रंग बदलता है।'],
['ख्यूक्रिन कौन है?','वह व्यक्ति है जिसे कुत्ते ने काटा है और जो शिकायत लेकर आता है।'],
['कहानी में किस प्रवृत्ति पर व्यंग्य किया गया है?','अवसरवाद, चापलूसी और सत्ता के सामने झुकने वाली मानसिकता पर।'],
['कहानी का मुख्य संदेश क्या है?','न्याय निष्पक्ष होना चाहिए, व्यक्ति की हैसियत देखकर निर्णय नहीं बदलना चाहिए।']
],mcq:[
['ओचुमेलॉव किस पद पर है?',['पुलिस अधिकारी','डॉक्टर','शिक्षक','किसान'],0],['शीर्षक गिरगिट किस गुण की ओर संकेत करता है?',['रंग बदलने जैसा व्यवहार','बहादुरी','ईमानदारी','धैर्य'],0],['ख्यूक्रिन की शिकायत किस बारे में है?',['कुत्ते के काटने के बारे में','खोए हुए धन के बारे में','चोरी के बारे में','परीक्षा के बारे में'],0],['ओचुमेलॉव का निर्णय किससे प्रभावित होता है?',['कुत्ते के मालिक की पहचान','सिर्फ सबूत','मौसम','ख्यूक्रिन की उम्र'],0],['कहानी का व्यंग्य किस पर है?',['अवसरवादी अधिकारी','बच्चों की पढ़ाई','प्रकृति','कला'],0],['निष्पक्ष न्याय के लिए क्या जरूरी है?',['तथ्यों पर समान निर्णय','मालिक की हैसियत','डर','चापलूसी'],0]
]},
'अब कहाँ दूसरे के दुख से दुखी होने वाले':{vs:[
['लेखक मनुष्य की संवेदनहीनता पर चिंता क्यों जताता है?','क्योंकि लोग अपने स्वार्थ में दूसरों और प्रकृति के दुख को अनदेखा करने लगे हैं।'],
['पाठ में प्रकृति के प्रति कैसा दृष्टिकोण सुझाया गया है?','प्रकृति और जीव-जंतुओं के साथ सह-अस्तित्व तथा करुणा का व्यवहार करना चाहिए।'],
['दूसरों के दुख से दुखी होना क्यों जरूरी है?','संवेदना समाज में सहयोग, दया और मानवीय संबंधों को मजबूत करती है।'],
['पाठ का शीर्षक क्या प्रश्न उठाता है?','क्या आज मनुष्य में दूसरों के दुख को महसूस करने की क्षमता कम हो गई है?'],
['लेखक का मुख्य संदेश क्या है?','स्वार्थ से ऊपर उठकर मनुष्य, पशु-पक्षियों और प्रकृति के प्रति संवेदनशील बनना।']
],mcq:[
['पाठ की मुख्य चिंता क्या है?',['संवेदनहीनता','तकनीकी कौशल','खेल भावना','व्यापार'],0],['लेखक किसके प्रति करुणा की बात करता है?',['मनुष्य और प्रकृति दोनों','केवल धनवानों','केवल शासकों','किसी के प्रति नहीं'],0],['संवेदना से क्या मजबूत होता है?',['मानवीय संबंध','स्वार्थ','भेदभाव','अहंकार'],0],['शीर्षक किस बात पर विचार कराता है?',['दूसरों के दुख के प्रति हमारी प्रतिक्रिया','मौसम की जानकारी','यात्रा का खर्च','परीक्षा परिणाम'],0],['पाठ किस व्यवहार को प्रोत्साहित करता है?',['सह-अस्तित्व','शोषण','उदासीनता','क्रूरता'],0],['लेखक के अनुसार संवेदनशीलता का विरोधी क्या है?',['स्वार्थपूर्ण उदासीनता','करुणा','सहयोग','दया'],0]
]},
'पतझर में टूटी पत्तियाँ':{vs:[
['‘गिन्नी का सोना’ में शुद्ध सोने और गिन्नी के सोने से क्या आशय है?','शुद्ध सोना आदर्श का प्रतीक है, जबकि गिन्नी का सोना व्यवहारिकता के साथ मिला हुआ रूप दर्शाता है।'],
['लेखक आदर्श और व्यवहार के बीच किस संतुलन की बात करता है?','जीवन में आदर्श जरूरी हैं, पर उन्हें व्यवहारिक समझ के साथ अपनाना चाहिए।'],
['‘झेन की देन’ में मानसिक शांति का क्या महत्त्व है?','वर्तमान क्षण पर ध्यान देने से मन की बेचैनी कम होती है और व्यक्ति सजग बनता है।'],
['पाठ का शीर्षक ‘पतझर में टूटी पत्तियाँ’ किस ओर संकेत करता है?','जीवन के अनुभवों से मिली सीख और विचारों के छोटे लेकिन महत्त्वपूर्ण अंशों की ओर।'],
['इन पाठांशों का साझा संदेश क्या है?','जीवन में संतुलन, सजगता और सोच-समझकर व्यवहार करना आवश्यक है।']
],mcq:[
['शुद्ध सोना किसका प्रतीक माना गया है?',['आदर्श','आलस्य','ईर्ष्या','भ्रम'],0],['गिन्नी का सोना किस ओर संकेत करता है?',['व्यवहारिकता से मिश्रित आदर्श','केवल कल्पना','प्रकृति का विनाश','युद्ध'],0],['झेन की सीख किस पर जोर देती है?',['वर्तमान क्षण में सजगता','लगातार चिंता','दूसरों से प्रतिस्पर्धा','दिखावा'],0],['आदर्श और व्यवहार में क्या आवश्यक है?',['संतुलन','पूर्ण अलगाव','स्वार्थ','टकराव ही'],0],['पाठ का व्यापक विषय क्या है?',['जीवन से मिली सीख','राजनीतिक इतिहास','वैज्ञानिक खोज','खेल प्रतियोगिता'],0],['मानसिक शांति में क्या सहायक है?',['सजगता और ध्यान','अत्यधिक बेचैनी','जल्दबाजी','दिखावा'],0]
]},
'कारतूस':{vs:[
['वज़ीर अली का चरित्र कैसा दिखाया गया है?','वह साहसी, चतुर और अंग्रेज़ी सत्ता का विरोध करने वाला पात्र है।'],
['वज़ीर अली अंग्रेज़ों के लिए चुनौती क्यों था?','वह उनकी सत्ता को स्वीकार नहीं करता था और अपने साहस से उन्हें परेशान करता था।'],
['कारतूस प्राप्त करने की घटना वज़ीर अली की कौन-सी विशेषता दिखाती है?','उसकी सूझ-बूझ, निर्भीकता और संकट में तुरंत निर्णय लेने की क्षमता।'],
['पाठ में अंग्रेज़ अधिकारियों की मनःस्थिति कैसी है?','वे वज़ीर अली की चालाकी और साहस के कारण असुरक्षित तथा चिंतित रहते हैं।'],
['एकांकी का मुख्य प्रभाव क्या है?','तेज़ घटनाक्रम और संवादों के माध्यम से साहस तथा चतुराई उभरकर आती है।']
],mcq:[
['वज़ीर अली का प्रमुख गुण क्या है?',['साहस और चतुराई','कायरता','आलस्य','उदासीनता'],0],['वज़ीर अली किसका विरोध करता है?',['अंग्रेज़ी सत्ता','शिक्षा','प्रकृति','कृषि'],0],['कारतूस की घटना किस गुण को उभारती है?',['सूझ-बूझ','लालच','अज्ञान','आलस्य'],0],['अंग्रेज़ अधिकारी वज़ीर अली से क्यों चिंतित हैं?',['उसकी निर्भीकता से','उसकी बीमारी से','उसकी पढ़ाई से','उसकी खेती से'],0],['‘कारतूस’ किस साहित्यिक रूप में पढ़ाया जाता है?',['एकांकी/नाटकीय रचना','दोहा','संस्मरण','गीत'],0],['पाठ का प्रमुख विषय क्या है?',['औपनिवेशिक सत्ता के विरुद्ध साहस','प्रकृति-चित्रण','विद्यालय जीवन','कृषि उत्पादन'],0]
]}
};

function sparshQaFor(subject, chapter) {
  if (subject === 'Hindi (Sparsh Bhag 2)') {
    const d = SPARSH_DATA[chapter];
    if (!d) return {vs:[], sh:[], lg:[]};
    const all = d.vs.map(([q,a])=>({q,a}));
    return {vs:all, sh:all.slice(0,Math.min(3,all.length)).map(x=>({q:x.q,a:x.a})), lg:all.slice(0,Math.min(2,all.length)).map(x=>({q:x.q,a:x.a}))};
  }
  const f=factFor(subject,chapter); if(!f.length)return {vs:[],sh:[],lg:[]};
  if(subject==='Mathematics') return mathQA(chapter);
  const vs=f.map((a)=>({q:`${conceptFromFact(a)} के बारे में एक महत्त्वपूर्ण बात लिखिए।`,a}));
  return {vs,sh:vs.slice(0,3),lg:vs.slice(0,2)};
}
function sparshMcqFor(subject, chapter) {
  if (subject === 'Hindi (Sparsh Bhag 2)') {
    const d=SPARSH_DATA[chapter]; if(!d)return [];
    return d.mcq.map(([q,opts,correct])=>({q,opts,correct}));
  }
  const f=factFor(subject,chapter); if(!f.length)return [];
  return f.map((correct,i)=>({q:`Which statement is correct about ${conceptFromFact(correct)}?`,...makeOptions(correct,f.filter(x=>x!==correct))}));
}

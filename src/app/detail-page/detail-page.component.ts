import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

  selectedData: any

   mockdata = [
    {
      "id": "TVM",
      "title": "Thiruvananthapuram",
      "image": "https://media.istockphoto.com/id/113553219/photo/trivandrum-temple-kerala-india.jpg?s=612x612&w=0&k=20&c=aki61RESJLLOV-hqkk1jYg5_mLWIZim7GvtIudkYIrA=",
      "description": "Thiruvananthapuram, the capital of Kerala, is a district steeped in heritage and natural charm. It houses the renowned Padmanabhaswamy Temple, one of the wealthiest temples in the world. The district is also home to Technopark, one of India’s largest IT parks. Its coastline features picturesque beaches like Kovalam and Varkala, popular among tourists. The region blends modernity with tradition, hosting research institutions like VSSC and IISER. Art and culture thrive through institutions like Kerala Kalamandalam and various film festivals. The Western Ghats offer scenic hill stations like Ponmudi. Thiruvananthapuram also serves as a political and administrative hub. Its cuisine, especially seafood, is a major attraction. Overall, it is a district that balances spirituality, nature, technology, and governance."
    },
    {
      "id": "KLM",
      "title": "Kollam",
      "image": "https://t3.ftcdn.net/jpg/11/26/86/62/360_F_1126866288_I3ZY918tNhcKmjtSeStXOwfcRz6zDUU3.jpg",
      "description": "Kollam is a historic port city known for its trade legacy, especially in cashews and spices. It serves as the gateway to Kerala's famed backwaters, with Ashtamudi Lake being the highlight. The district was once part of the ancient seaport of Quilon, with ties to Chinese and Arab traders. Munroe Island offers a glimpse into serene backwater life. Kollam’s coastline and beaches like Thirumullavaram are relatively untouched and peaceful. The district also features a rich temple architecture and cultural festivals. The cashew processing industry is a backbone of the local economy. Kollam’s literacy rate and healthcare infrastructure are commendable. With its rich maritime past and tranquil water bodies, it remains a blend of history and nature. It’s often referred to as the southern gateway to the Kerala backwaters."
    },
    {
      "id": "PTA",
      "title": "Pathanamthitta",
      "image": "https://www.dtpcpathanamthitta.com/uploads/category/aranmula-parthasarathy-temple-pathanamthitta-8-20230506121420914292.webp",
      "description": "Pathanamthitta is known as the spiritual heartland of Kerala. It hosts the world-famous Sabarimala Temple, which draws millions of devotees annually. The region is also rich in forests, rivers, and wildlife sanctuaries. Aranmula, a heritage village in the district, is famous for its boat race and metal mirrors. The district plays a key role in preserving Kerala’s traditional art and ritual forms. Agriculture, especially rubber cultivation, supports the local economy. Pilgrimage tourism peaks during the Mandalam-Makaravilakku season. The Pamba River enhances the region’s spiritual ambiance. With a serene landscape and a strong cultural identity, it offers a meditative environment. Pathanamthitta is often considered the land of temples, rituals, and religious harmony."
    },
    {
      "id": "ALP",
    "title": "Alappuzha",
    "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/alappuzha-1713787035_f4cce285d427001c4a7a.webp&w=3840&q=75",
    "description": "Often referred to as the “Venice of the East,” Alappuzha is famed for its intricate network of canals and backwaters. The district is the epicenter of houseboat tourism in Kerala. The annual Nehru Trophy Boat Race on Punnamada Lake is a major attraction. It is also known for its coir industry, producing high-quality mats and ropes. Alappuzha’s beaches offer sunset views and colonial-era lighthouses. Kuttanad, called the “Rice Bowl of Kerala,” lies here with vast paddy fields below sea level. The district’s economy thrives on agriculture and inland fishing. Temples and churches here reflect the syncretic culture of the region. Ayurveda and wellness tourism is growing steadily in Alappuzha. It is a district where water, tradition, and serenity coexist."
  },
  {
    "id": "KTM",
    "title": "Kottayam",
    "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/kottayam-1713787799_9491c759c2be232a99ea.webp&w=3840&q=75",
    "description": "Kottayam is known for its literacy and educational achievements, being the first district in India to achieve 100% literacy. The district is dotted with publishing houses, earning it the title 'Land of Letters.' It is home to several prestigious institutions, including Mahatma Gandhi University. Kottayam is also a hub for rubber plantations and natural rubber production. The nearby hill station of Ilaveezhapoonchira offers breathtaking views. Religious diversity thrives here with significant Hindu temples, Christian churches, and mosques. Vembanad Lake and Kumarakom Bird Sanctuary attract eco-tourists. It’s also famous for its serene backwaters and houseboats. The district's cultural richness is evident in its literature, art, and festivals. Kottayam stands as a model of harmony, intellect, and nature."
  },
  {
    "id": "IDK",
    "title": "Idukki",
    "image": "https://www.keralatourism.org/images/destination/large/idukki_arch_dam20150530085042_187_1.jpg",
    "description": "Idukki is a high-range district known for its rugged hills, dense forests, and dam reservoirs. The Idukki Arch Dam, one of Asia's tallest, is a marvel of engineering. Munnar, a popular hill station here, is blanketed with tea gardens and misty mountains. The district is a biodiversity hotspot, home to the Eravikulam and Periyar Wildlife Sanctuaries. Elephants, tigers, and the endangered Nilgiri Tahr roam its forests. Idukki’s cool climate and scenic vistas draw tourists year-round. Cardamom and spice plantations flourish in this region. Hydroelectric projects here contribute significantly to Kerala’s power supply. Tribal communities here preserve ancient traditions and sustainable living. Idukki is a land of greenery, wilderness, and natural beauty."
  },
  {
    "id": "EKM",
    "title": "Ernakulam",
    "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/ernakulam-1713787102_a8818817f65b407c1bb8.webp&w=3840&q=75",
    "description": "Ernakulam is the commercial capital of Kerala, encompassing the metropolitan city of Kochi. The district merges colonial history, vibrant port activity, and a modern urban lifestyle. Fort Kochi, with its European heritage and Chinese fishing nets, is a major tourist spot. It has a thriving IT sector, with Infopark and SmartCity housing global firms. The district features a cosmopolitan culture and excellent infrastructure. Jew Street and the Paradesi Synagogue highlight its multicultural past. Ernakulam’s Marine Drive and Lulu Mall reflect urban vibrance. It is also an educational and healthcare hub. Traditional art forms and modern theatre co-exist here. Ernakulam is a place where tradition and progress go hand in hand."
  },
  {
    "id": "TSR",
    "title": "Thrissur",
    "image": "http://thrissurpooramfestival.com/vid_crsl/JOoIF2XPMqs.jpg",
    "description": "Thrissur is known as the cultural capital of Kerala. It hosts the world-famous Thrissur Pooram, a grand temple festival with caparisoned elephants and percussion music. The Vadakkunnathan Temple is a major spiritual center here. Thrissur is home to prestigious institutions like Kerala Kalamandalam and the Sahitya Akademi. The district has deep-rooted traditions in classical dance, music, and drama. Guruvayur Temple, a major Krishna shrine, is also located in Thrissur. The economy is driven by trade, banking, and gold jewelry industries. Thrissur has a rich literary and artistic legacy. The district’s festivals, museums, and educational institutions enrich its cultural fabric. It is a vibrant blend of devotion, artistry, and celebration."
  },
  {
    "id": "PLK",
    "title": "Palakkad",
    "image": "https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/places/1199420735_palakkad_kerala_3000x1000.jpg?q=79&w=1920&h=685",
    "description": "Palakkad is known as the 'Gateway of Kerala' due to the Palakkad Gap in the Western Ghats. The district is blessed with vast plains, rivers, and paddy fields. It is a major agricultural hub, growing rice, vegetables, and coconut. The Palakkad Fort, built by Hyder Ali, is a prominent historical site. Silent Valley National Park in the district is a biodiversity treasure trove. Palakkad is famous for Carnatic music and has produced several legendary musicians. Temples, mosques, and churches dot the landscape, reflecting communal harmony. The region's traditional villages and Tamil influence add cultural diversity. Ayurveda and Kalari (martial art) are also practiced here. Palakkad remains a green, peaceful, and culturally rich district."
  },
  {
    "id": "MLP",
    "title": "Malappuram",
    "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/malappuram-1713787896_d3fc5b288e34a59ebaba.webp&w=3840&q=75",
    "description": "Malappuram is a district of rolling hills, rivers, and cultural dynamism. It has a strong Islamic heritage and is known for its mosques and Arabic colleges. The district has contributed significantly to Kerala’s football scene. The historic Thunchan Parambu is associated with Thunchath Ezhuthachan, the father of Malayalam literature. The economy is supported by remittances, agriculture, and small-scale industries. Malappuram is fast developing in terms of education and infrastructure. The region celebrates diverse festivals with equal fervor. Kottakkal Arya Vaidya Sala, a renowned Ayurvedic center, is located here. It is also famous for Mamankam Festival history on the Bharathapuzha riverbanks. Malappuram beautifully blends religion, history, and progress."
  },
  {
    "id": "KKD",
    "title": "Kozhikode",
    "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/kozhikode-1713787852_8090f891ee0831360e4d.webp&w=3840&q=75",
    "description": "Formerly known as Calicut, Kozhikode is where Vasco da Gama first landed in India. It was once the capital of the powerful Zamorin dynasty. The district played a pivotal role in spice trade with Arabs, Chinese, and Europeans. Kozhikode Beach and Beypore port are symbols of its maritime glory. It is also the birthplace of Malayalam journalism. Kozhikode is known for sweet delicacies like Kozhikodan Halwa and strong cultural traditions. Educational institutions like IIM-Kozhikode elevate its academic profile. The city has a relaxed vibe with vibrant arts, music, and food culture. It is also a health tourism destination due to Ayurvedic centers. Kozhikode is a fusion of history, hospitality, and heritage."
  },
  {
    "id": "WYD",
    "title": "Wayanad",
    "image": "https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg",
    "description": "Wayanad is a lush, forest-covered district nestled in the Western Ghats. It is known for its wildlife, waterfalls, and spice plantations. Edakkal Caves contain prehistoric carvings dating back to the Neolithic era. The district is a haven for trekkers, with peaks like Chembra and Banasura Hills. Tribal culture is deeply rooted in Wayanad, with numerous indigenous communities living traditionally. Agriculture is dominant, with pepper, coffee, and cardamom widely grown. Wayanad Wildlife Sanctuary hosts elephants, leopards, and a wide variety of birds. Tourism is eco-friendly and focused on sustainability. The climate is cool year-round, offering respite from the lowlands. Wayanad is Kerala’s crown jewel of green and cultural diversity."
  },
  {
    "id": "KGD",
    "title": "Kannur",
    "image": "http://keralatourism.org/images/destination/large/valapattanam_kannur20131031122155_1_1.jpg",
    "description": "Kannur, known as the land of looms and lore, has a strong legacy in handloom and folklore. The district is famous for Theyyam, a vibrant ritual art form. Its beaches, like Payyambalam and Muzhappilangad (India’s only drive-in beach), attract many visitors. Kannur has historical forts like St. Angelo built by the Portuguese. The region was a significant center for trade and colonial conflict. It is also home to many freedom fighters and political thinkers. Handloom weaving is a traditional industry here. Kannur International Airport enhances connectivity and tourism. The district celebrates secularism through its temples, mosques, and churches. Kannur is a land where art, resistance, and the sea meet."
  },
  {
    "id": "KSR",
    "title": "Kasaragod",
    "image": "https://hblimg.mmtcdn.com/content/hubble/img/kasargoddestimages/mmt/activities/t_ufs/m_Madhur_Sri_Madanantheshwara_Siddhivinayaka_Temple_1_l_482_640.jpg",
    "description": "Kasaragod is Kerala’s northernmost district, rich in linguistic and cultural diversity. It borders Karnataka and has significant Tulu, Kannada, and Malayalam speaking populations. The Bekal Fort, a seaside fortress, is a major landmark. Backwaters, beaches, and hills make it a scenic destination. The district is known for coir and handloom industries. Temples, mosques, and churches coexist in harmony, showcasing Kerala’s pluralism. Yakshagana and Theyyam are popular traditional art forms. Kasaragod is also home to Ananthapura Lake Temple, believed to be the original seat of Lord Anantha. It remains less commercialized and retains a calm village atmosphere. The district is a confluence of languages, cultures, and serenity."
  }
]

constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    const id = params['id'];
    this.selectedData = this.mockdata.find(item => item.id === id);
  });
}
}

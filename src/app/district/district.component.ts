import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-district',
  imports: [CommonModule],
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Add smooth scroll animation on load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToDistrict(districtId: string): void {
    this.router.navigate(['/district', districtId]);
  }

  mockdata = [
    {
      "id": "TVM",
      "title": "Thiruvananthapuram",
      "image": "https://media.istockphoto.com/id/113553219/photo/trivandrum-temple-kerala-india.jpg?s=612x612&w=0&k=20&c=aki61RESJLLOV-hqkk1jYg5_mLWIZim7GvtIudkYIrA=",
      "description": "The majestic capital city where ancient temples meet modern technology. Home to the legendary Padmanabhaswamy Temple and India's space research center, this district beautifully balances tradition with innovation."
    },
    {
      "id": "KLM",
      "title": "Kollam",
      "image": "https://t3.ftcdn.net/jpg/11/26/86/62/360_F_1126866288_I3ZY918tNhcKmjtSeStXOwfcRz6zDUU3.jpg",
      "description": "Gateway to Kerala's enchanting backwaters, where ancient spice routes converge with serene lake systems. Experience the timeless charm of Ashtamudi Lake and discover the legacy of maritime trade."
    },
    {
      "id": "PTA",
      "title": "Pathanamthitta",
      "image": "https://www.dtpcpathanamthitta.com/uploads/category/aranmula-parthasarathy-temple-pathanamthitta-8-20230506121420914292.webp",
      "description": "The spiritual heart of Kerala, home to the sacred Sabarimala Temple. This divine land attracts millions of devotees and offers profound experiences in pristine forest settings."
    },
    {
      "id": "ALP",
      "title": "Alappuzha",
      "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/alappuzha-1713787035_f4cce285d427001c4a7a.webp&w=3840&q=75",
      "description": "Venice of the East - where endless waterways create a magical maze of canals, lagoons, and rice paddies. Cruise through paradise on traditional houseboats and witness spectacular boat races."
    },
    {
      "id": "KTM",
      "title": "Kottayam",
      "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/kottayam-1713787799_9491c759c2be232a99ea.webp&w=3840&q=75",
      "description": "Land of Letters and Lakes - India's first 100% literate district. Immerse yourself in rich literary traditions while enjoying the serene beauty of Kumarakom's bird sanctuary."
    },
    {
      "id": "IDK",
      "title": "Idukki",
      "image": "https://www.keralatourism.org/images/destination/large/idukki_arch_dam20150530085042_187_1.jpg",
      "description": "High-altitude paradise of mist-covered mountains, pristine forests, and aromatic spice gardens. Adventure awaits in this biodiversity hotspot with Asia's tallest arch dam."
    },
    {
      "id": "EKM",
      "title": "Ernakulam",
      "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/ernakulam-1713787102_a8818817f65b407c1bb8.webp&w=3840&q=75",
      "description": "Commercial capital where Portuguese heritage meets Silicon Valley dreams. Explore the historic Fort Kochi while experiencing Kerala's most vibrant urban culture."
    },
    {
      "id": "TSR",
      "title": "Thrissur",
      "image": "http://thrissurpooramfestival.com/vid_crsl/JOoIF2XPMqs.jpg",
      "description": "Cultural capital renowned for the spectacular Thrissur Pooram festival. Where ancient temples echo with classical music and traditional arts flourish in their purest form."
    },
    {
      "id": "PLK",
      "title": "Palakkad",
      "image": "https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/places/1199420735_palakkad_kerala_3000x1000.jpg?q=79&w=1920&h=685",
      "description": "Gateway of Kerala through the scenic Palakkad Gap. Discover vast golden paddy fields, the historic Tipu Sultan's fort, and the pristine Silent Valley ecosystem."
    },
    {
      "id": "MLP",
      "title": "Malappuram",
      "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/malappuram-1713787896_d3fc5b288e34a59ebaba.webp&w=3840&q=75",
      "description": "Land of rolling hills and rich Islamic heritage. Experience the birthplace of Malayalam literature and witness Kerala's passionate football culture in this culturally diverse district."
    },
    {
      "id": "KKD",
      "title": "Kozhikode",
      "image": "https://www.keralatourism.org/_next/image/?url=http://127.0.0.1/ktadmin/img/pages/large-desktop/kozhikode-1713787852_8090f891ee0831360e4d.webp&w=3840&q=75",
      "description": "Historic Calicut where Vasco da Gama first set foot in India. Savor the legendary Kozhikodan halwa while exploring ancient spice trading ports and pristine beaches."
    },
    {
      "id": "WYD",
      "title": "Wayanad",
      "image": "https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg",
      "description": "Pristine wilderness in the Western Ghats, home to prehistoric Edakkal caves and diverse tribal cultures. Trek through coffee plantations and spot exotic wildlife in this green paradise."
    },
    {
      "id": "KGD",
      "title": "Kannur",
      "image": "http://keralatourism.org/images/destination/large/valapattanam_kannur20131031122155_1_1.jpg",
      "description": "Land of looms and lore, famous for the vibrant Theyyam rituals and India's only drive-in beach. Discover ancient forts and experience the raw power of traditional art forms."
    },
    {
      "id": "KSR",
      "title": "Kasaragod",
      "image": "https://hblimg.mmtcdn.com/content/hubble/img/kasargoddestimages/mmt/activities/t_ufs/m_Madhur_Sri_Madanantheshwara_Siddhivinayaka_Temple_1_l_482_640.jpg",
      "description": "Kerala's northern gem where multiple languages and cultures converge. Explore the magnificent Bekal Fort and experience the tranquil beauty of unexplored backwaters."
    }
  ];
}
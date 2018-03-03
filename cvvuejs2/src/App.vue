<template>
  <div class="container" style="max-width: 800px">
    <div id="cv-header" class=" text-center">
        <div id="cv-name"><h1 id="cv-name-font" class="display-4 font-weight-bold">HAESEONG HAN</h1></div>
        <div id="cv-email"><h6 class="">haeseong.han@gmail.com</h6></div>
        <div id="cv-homepage"><h6><a href="#">Github Page : address for printing</a></h6></div>
        <div class="notimportant d-none d-sm-block">
          <div id="phone">phone - v-if</div>
          <div id="address">address - v-if</div>
        </div>
    </div>
    <div id="cv-body" class=" border-top border-bottom">
        <div id="cv-portfolio" class="section border-top border-bottom">
          <div class="cv-section-title border-bottom"><h5>PORTFOLIO</h5></div>
          <div class="cv-section-body">
            <div class="cv-section-item">
              <div class="row justify-content-between">
                <div class="col-9 item-company">self</div>
                <div class="col item-location text-right d-none d-sm-block"></div>
              </div>
              <div class="row justify-content-between font-italic">
                <div class="col-9 item-title">bootstrap4</div>
                <div class="col item-time text-right d-none d-sm-block">
                  <span class="item-start-time">2018</span>
                  <span> - </span>
                  <span class="item-end-time">2018</span>
                </div>
              </div>
              <ul class="item-descriptions d-none d-sm-block">
                <li class="item-description">
                  item-description - link to github page
                </li>
                <li class="item-description">
                  item-description
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cv-work" class="section border-top border-bottom">
          <div class="cv-section-title border-bottom"><h5>WORK EXPERIENCE</h5></div>
          <div class="cv-section-body">
            <div class="cv-section-item">
              <div class="row justify-content-between">
                <div class="col-9 item-company">KIS PRICING <span class="xxs">(Affiliated with Moody's)</span></div>
                <div class="col item-location text-right d-none d-sm-block">SEOUL</div>
              </div>
              <div class="row justify-content-between font-italic">
                <div class="col-9 item-title">Financial Analyst</div>
                <div class="col item-time text-right d-none d-sm-block">
                  <span class="item-start-time">Apr 2014</span>
                  <span> - </span>
                  <span class="item-end-time">Feb 2016</span>
                </div>
              </div>
              <ul class="item-descriptions d-none d-sm-block">
                <li class="item-description">
                  Evaluate structured fixed-income and credit-linked derivative instruments for institutional investors.
                </li>
                <li class="item-description">
                  Develop pricing models and programs for asset-backed commercial papers and electronic short-term bonds.
                </li>
                <li class="item-description">
                  Design converting logic to compare the yield curve of different bond markets using the bootstrapping method.
                </li>
              </ul>
            </div>

            <!-- <div class="cv-section-item">
              <div class="item-company">KOSDA(Korea Options, Swaps and Derivatives Association)</div>
              <div class="item-location">SEOUL</div>
              <div class="item-title">INTERNSHIP</div>
              <div class="item-time">
                <div class="item-start-time">Feb 2014</div>
                <div class="item-end-time">Apr 2014</div>
              </div>
              <div class="item-descriptions">
                <div class="item-description">
                  · Managed the whole process of the FORUM about international regulations of OTC markets.
                </div>
                <div class="item-description">
                  · Managed the whole process of the 2013 KOSDA AWARDS.
                </div>
              </div>
            </div>

            <div class="cv-section-item">
              <div class="item-company">ROK AIRFORCE</div>
              <div class="item-location">OSAN</div>
              <div class="item-title">Aviation control technician, Sergeant</div>
              <div class="item-time">
                <div class="item-start-time">Nov 2009</div>
                <div class="item-end-time">Dec 2011</div>
              </div>
              <div class="item-descriptions">
                <div class="item-description">
                  · Monitor aircraft within a specific airspace, using radar, computer equipment, or visual references.
                </div>
                <div class="item-description">
                  · Compile information about flights from flight plans, pilot reports, radar, or observations.
                </div>
                <div class="item-description">
                  · Participated in developing a program to count and summarize flight plans.
                </div>
                <div class="item-description">
                  · Placed third out of 700 soldiers during the seven-week recruit training.
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div id="cv-education" class="section border-top border-bottom">
          <div class="cv-section-title border-bottom"><h5>EDUCATION</h5></div>

          <div class="cv-section-body">
            <div class="cv-section-item">
              <div class="row justify-content-between">
                <div class="col-9 item-company">EDX, INC. <span class="xxs">(MOOC PLATFORM)</span></div>
                <div class="col item-location text-right d-none d-sm-block">ONLINE</div>
              </div>
              <div class="row justify-content-between font-italic">
                <div class="col-9 item-title">Data Science MicroMasters</div>
                <div class="col item-time text-right d-none d-sm-block">
                  <span class="item-start-time">2017</span>
                  <span> - </span>
                  <span class="item-end-time">ATTENDING</span>
                </div>
              </div>
              <ul class="item-descriptions d-none d-sm-block">
                <li>Attending MicroMasters Program in Data Science from edX, in partnership with UCSanDiego</li>
                <li class="item-description">
                  Python for Data Science
                  Developed a familiarity with python related tools;<br>
                  jupyter notebooks, pandas, numpy, matplotlib, scikit-learn, nltk
                </li>
                <li>
                  Statistics blahblah-----modify later
                </li>
              </ul>
            </div>

            <!-- <div class="cv-section-item">
              <div class="item-company">NATIONAL INSTITUTE FOR LIFELONG EDUCATION (NILE)</div>
              <div class="item-location">SEOUL</div>
              <div class="item-title">Computer Engineering</div>
              <div class="item-time">
                <div class="item-start-time">2016</div>
                <div class="item-end-time">2017</div>
              </div>
              <div class="item-descriptions">
                <div class="item-description">
                  · Earned 36 credits on undergraduate_level courses in computer engineering from 2016. (GPA: 4.17/4.5 ( 95.8/100 ))
                </div>
                <div class="item-description">
                  · Coursework: Data Structures; Computer System; Network_1; System Programming; Algorithms; Digital Engineering; Microprocessor_1; Computer Architecture and Organization; Databases; Discrete Mathematics; Software Engineering; Operation System
                </div>
              </div>
            </div>

            <div class="cv-section-item">
              <div class="item-company">CHUNGNAM NATIONAL UNIVERSITY SCHOOL OF MEDICINE</div>
              <div class="item-location">DAEJEON</div>
              <div class="item-title">Medicine(M.D. Candidate)</div>
              <div class="item-time">
                <div class="item-start-time">MARCH 2016</div>
                <div class="item-end-time">Leave of Absence</div>
              </div>
              <div class="item-descriptions">
                <div class="item-description">
                  · between second year and third year
                </div>
              </div>
            </div>

            <div class="cv-section-item">
              <div class="item-company">YONSEI UNIVERSITY</div>
              <div class="item-location">SEOUL</div>
              <div class="item-title">B.A in Business Administration, B.A. in Economics , Minored in Applied Statistics.</div>
              <div class="item-time">
                <div class="item-start-time"></div>
                <div class="item-end-time">Aug 2014</div>
              </div>
              <div class="item-descriptions">
                <div class="item-description">
                  · Statistics (partial GPA: 4.30/4.5)
                  · Finance (partial GPA: 4.35/4.5)
                  · Economics (partial GPA: 4.17/4.5)
                  · The Highest Honors (Aug 2008), Honors (Aug 2013)
                </div>
              </div>
            </div> -->
          </div>
        </div>
             
        <div id="cv-skill">
          SKILLS - modify later
        </div>

        <div id="cv-others">
          other information - modify later
        </div>

    </div>
    <div id ="cv-footer" class="">
      footer - haeseong.han@gmail.com - modify later
    </div>
     
       
  
       
  
  </div>

</template>

<script>

</script>

<style>
  @media screen and (max-width: 400px){
    .xxs{
      display:none;
    }
  }
  @media screen and (max-width: 500px){
    #cv-name-font{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 710px){
    .item-start-time{
      display:none;
    }
  }
</style>

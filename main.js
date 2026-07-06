/* ================================================================
   PROVAKAR - Main JavaScript (Combined)
   ----------------------------------------------------------------
   এই ফাইলটি নিচের ৮টি JS ফাইল একত্রিত করে তৈরি করা হয়েছে
   (dependency ক্রম অনুযায়ী সাজানো):
   1. chapters-data.js  (ChaptersData)
   2. storage.js        (Storage)
   3. app.js            (App)
   4. dashboard.js      (Dashboard)
   5. chapter-view.js   (ChapterView)
   6. quiz.js           (Quiz)
   7. search.js         (Search)
   8. settings.js       (Settings)

   প্রতিটি ফাইলের আলাদা DOMContentLoaded listener সরিয়ে
   সবার শেষে একটি মাত্র সম্মিলিত initializer রাখা হয়েছে,
   যাতে init-এর ক্রম সবসময় সঠিক থাকে।
   ================================================================ */

/* ================================================================
   SECTION: chapters-data.js — Chapters Data (সব চ্যাপ্টারের কন্টেন্ট ও প্রশ্ন)
   ================================================================ */

/* ========================================
   PROVAKAR - Chapters Data
   Complete content for Chapter 1 and 2
   ======================================== */

const ChaptersData = {
    // Chapter 1: ধ্বনি ও বর্ণ
    1: {
        id: 1,
        title: 'ধ্বনি ও বর্ণ',
        englishTitle: 'Sound and Letters',
        category: 'grammar',
        content: `
            <!-- সংজ্ঞা ও ব্যাখ্যা -->
            <h2><i class="fas fa-info-circle"></i> সংজ্ঞা ও ব্যাখ্যা</h2>
            
            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> ধ্বনি কী?</div>
                <p>ধ্বনি হলো মুখ থেকে উচ্চারিত শব্দাংশ যা কানে শোনা যায় কিন্তু লেখা যায় না। এটি একটি <strong>শ্রুতিগোচর</strong> (audible) বিষয়। ধ্বনি কেবল শোনা যায়, দেখা বা লেখা যায় না।</p>
                <p><em>উদাহরণ: "অ", "ক", "ম" — এগুলো উচ্চারণ করলে যে শব্দ তৈরি হয়, তাকে ধ্বনি বলে।</em></p>
            </div>

            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> বর্ণ কী?</div>
                <p>বর্ণ হলো ধ্বনির <strong>লিখিত রূপ</strong>। ধ্বনিকে লিখিত আকারে প্রকাশ করার জন্য যে চিহ্ন ব্যবহার করা হয়, তাকে বর্ণ বলে। বর্ণ চোখে দেখা যায় এবং লেখা যায়, কিন্তু শোনা যায় না।</p>
                <p><em>উদাহরণ: অ, ক, ম — এগুলো বর্ণ।</em></p>
            </div>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন</div>
                <p><strong>ধ্বনি = শোনা যায়, লেখা যায় না</strong></p>
                <p><strong>বর্ণ = লেখা যায়, শোনা যায় না</strong></p>
            </div>

            <h3>ধ্বনি ও বর্ণের পার্থক্য</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>বিষয়</th>
                        <th>ধ্বনি</th>
                        <th>বর্ণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সংজ্ঞা</strong></td>
                        <td>উচ্চারিত শব্দাংশ</td>
                        <td>ধ্বনির লিখিত রূপ</td>
                    </tr>
                    <tr>
                        <td><strong>অনুভূতি</strong></td>
                        <td>শোনা যায়</td>
                        <td>দেখা যায়</td>
                    </tr>
                    <tr>
                        <td><strong>প্রকৃতি</strong></td>
                        <td>কানে শ্রুতিগোচর</td>
                        <td>চোখে দৃশ্যমান</td>
                    </tr>
                    <tr>
                        <td><strong>উদাহরণ</strong></td>
                        <td>"অ" উচ্চারণ</td>
                        <td>অ (বর্ণ)</td>
                    </tr>
                </tbody>
            </table>

            <!-- স্বরধ্বনি -->
            <h2><i class="fas fa-music"></i> স্বরধ্বনি (Vowel Sounds)</h2>
            <p>স্বরধ্বনি হলো এমন ধ্বনি যা উচ্চারণ করতে কোনো বাধা পেতে হয় না। মুখের ভেতরে বাতাস নির্বিঘ্নে বেরিয়ে যায়।</p>

            <h3>স্বরধ্বনির প্রকারভেদ</h3>
            
            <div class="definition-box">
                <div class="box-title">১. হ্রস্ব স্বর (Short Vowels)</div>
                <p>যে স্বরধ্বনি অল্প সময়ের জন্য উচ্চারিত হয়, তাকে হ্রস্ব স্বর বলে।</p>
                <p><strong>হ্রস্ব স্বর:</strong> অ, ই, উ, ঋ</p>
                <p><strong>উদাহরণ:</strong> অক্ষরের 'অ', ইঁদুরের 'ই', উপহারের 'উ'</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. দীর্ঘ স্বর (Long Vowels)</div>
                <p>যে স্বরধ্বনি বেশিক্ষণ সময় ধরে উচ্চারিত হয়, তাকে দীর্ঘ স্বর বলে।</p>
                <p><strong>দীর্ঘ স্বর:</strong> আ, ঈ, ঊ, এ, ঐ, ও, ঔ</p>
                <p><strong>উদাহরণ:</strong> আমের 'আ', ঈশ্বরের 'ঈ', ওষুধের 'ও'</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র ১: হ্রস্ব ও দীর্ঘ চেনার উপায়</div>
                <p><strong>ট্রিক:</strong> হ্রস্ব স্বরের উচ্চারণে এক মাত্রা লাগে (যেমন: অ = এক মাত্রা)। দীর্ঘ স্বরের উচ্চারণে দুই মাত্রা লাগে (যেমন: আ = এক মাত্রা + এক মাত্রা)।</p>
            </div>

            <h3>মৌলিক স্বর ও যৌগিক স্বর</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>মৌলিক স্বর (৫টি)</th>
                        <th>যৌগিক স্বর (২টি)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>অ, আ, ই, উ, ঋ</td>
                        <td>এ (অ + ই), ঐ (অ + ই + অ)</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>ও (অ + উ), ঔ (অ + উ + অ)</td>
                    </tr>
                </tbody>
            </table>

            <!-- ব্যঞ্জনধ্বনি -->
            <h2><i class="fas fa-volume-up"></i> ব্যঞ্জনধ্বনি (Consonant Sounds)</h2>
            <p>ব্যঞ্জনধ্বনি হলো এমন ধ্বনি যা উচ্চারণ করতে মুখের কোনো না কোনো স্থানে বাধা পায়।</p>

            <h3>ব্যঞ্জনধ্বনির প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. স্পর্শ ব্যঞ্জন (২৫টি)</div>
                <p>যে ব্যঞ্জনধ্বনি উচ্চারণ করতে জিহ্বা মুখের কোনো স্থানে স্পর্শ করে, তাকে স্পর্শ ব্যঞ্জন বলে।</p>
                <p><strong>৫টি বর্গ:</strong></p>
                <ul>
                    <li><strong>ক-বর্গ:</strong> ক, খ, গ, ঘ, ঙ (কণ্ঠ্য)</li>
                    <li><strong>চ-বর্গ:</strong> চ, ছ, জ, ঝ, ঞ (তালব্য)</li>
                    <li><strong>ট-বর্গ:</strong> ট, ঠ, ড, ঢ, ণ (মূর্ধন্য)</li>
                    <li><strong>ত-বর্গ:</strong> ত, থ, দ, ধ, ন (দন্ত্য)</li>
                    <li><strong>প-বর্গ:</strong> প, ফ, ব, ভ, ম (ওষ্ঠ্য)</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">২. অন্তঃস্থ ব্যঞ্জন (৪টি)</div>
                <p>যে ব্যঞ্জনধ্বনি স্পর্শ ও উষ্মধ্বনির মাঝামাঝি অবস্থান করে, তাকে অন্তঃস্থ ব্যঞ্জন বলে।</p>
                <p><strong>অন্তঃস্থ:</strong> য, র, ল, ব</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. উষ্ম ব্যঞ্জন (৪টি)</div>
                <p>যে ব্যঞ্জনধ্বনি উচ্চারণ করতে বাতাস ঘর্ষণ বা শব্দ তৈরি করে, তাকে উষ্ম ব্যঞ্জন বলে।</p>
                <p><strong>উষ্ম:</strong> শ, ষ, স, হ</p>
            </div>

            <!-- উচ্চারণের স্থান -->
            <h2><i class="fas fa-map-marker-alt"></i> উচ্চারণের স্থান অনুযায়ী শ্রেণিবিভাগ</h2>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>উচ্চারণের স্থান</th>
                        <th>ধ্বনি</th>
                        <th>বর্ণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>কণ্ঠ্য</strong></td>
                        <td>কণ্ঠদেশে উচ্চারিত</td>
                        <td>ক, খ, গ, ঘ, ঙ, অ, আ</td>
                    </tr>
                    <tr>
                        <td><strong>তালব্য</strong></td>
                        <td>তালুতে জিহ্বা স্পর্শ করে</td>
                        <td>চ, ছ, জ, ঝ, ঞ, ই, ঈ</td>
                    </tr>
                    <tr>
                        <td><strong>মূর্ধন্য</strong></td>
                        <td>মূর্ধাতে জিহ্বা স্পর্শ করে</td>
                        <td>ট, ঠ, ড, ঢ, ণ, ঋ</td>
                    </tr>
                    <tr>
                        <td><strong>দন্ত্য</strong></td>
                        <td>দাঁতে জিহ্বা স্পর্শ করে</td>
                        <td>ত, থ, দ, ধ, ন, ল</td>
                    </tr>
                    <tr>
                        <td><strong>ওষ্ঠ্য</strong></td>
                        <td>ঠোঁটে উচ্চারিত</td>
                        <td>প, ফ, ব, ভ, ম, উ, ঊ</td>
                    </tr>
                </tbody>
            </table>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন: উচ্চারণ স্থানের সহজ টেকনিক</div>
                <p><strong>ক</strong>ণ্ঠ্য - <strong>ক</strong>রা</p>
                <p><strong>তা</strong>লব্য - <strong>চ</strong>া</p>
                <p><strong>ট</strong>িপে <strong>ট</strong>িপে - মূ<strong>র</strong>ধন্য</p>
                <p><strong>ত</strong>োদের <strong>ত</strong>াল - <strong>ত</strong>ালব্য নয়, <strong>দ</strong>ন্ত্য</p>
                <p><strong>প</strong>াখি - ও<strong>ষ</strong>্ঠ্য</p>
            </div>

            <!-- অল্পপ্রাণ ও মহাপ্রাণ -->
            <h2><i class="fas fa-chart-bar"></i> অল্পপ্রাণ ও মহাপ্রাণ ধ্বনি</h2>
            
            <div class="definition-box">
                <div class="box-title">অল্পপ্রাণ ধ্বনি</div>
                <p>যে ব্যঞ্জনধ্বনি অল্প বাতাস দিয়ে উচ্চারিত হয়, তাকে অল্পপ্রাণ বলে।</p>
                <p><strong>অল্পপ্রাণ:</strong> ক, গ, ঙ, চ, জ, ঞ, ট, ড, ণ, ত, দ, ন, প, ব, ম, য, র, ল, শ, ষ, স, হ (মোট ২৫টি)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">মহাপ্রাণ ধ্বনি</div>
                <p>যে ব্যঞ্জনধ্বনি বেশি বাতাস দিয়ে জোরে উচ্চারিত হয়, তাকে মহাপ্রাণ বলে।</p>
                <p><strong>মহাপ্রাণ:</strong> খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ (মোট ১০টি)</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র ২: মহাপ্রাণ মনে রাখার টেকনিক</div>
                <p><strong>"খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ"</strong> — এই ১০টি মহাপ্রাণ বর্ণ।</p>
                <p><strong>ট্রিক:</strong> প্রতিটি বর্গের ২য় ও ৪র্থ বর্ণটি মহাপ্রাণ (ক<strong>খ</strong> <strong>গ</strong>ঘ)। তবে প-বর্গের ক্ষেত্রে ২য় ও ৪র্থ নয়, আছে ২য় ও ৫ম (প<strong>ফ</strong> ব<strong>ভ</strong>)।</p>
            </div>

            <!-- অঘোষ ও ঘোষ -->
            <h2><i class="fas fa-assistive-listening-systems"></i> অঘোষ ও ঘোষ ধ্বনি</h2>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>বিষয়</th>
                        <th>অঘোষ</th>
                        <th>ঘোষ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সংজ্ঞা</strong></td>
                        <td>স্বরতন্ত্রী কাঁপে না</td>
                        <td>স্বরতন্ত্রী কাঁপে</td>
                    </tr>
                    <tr>
                        <td><strong>উচ্চারণ</strong></td>
                        <td>কর্কশ বা শব্দতীক্ষ্ণ</td>
                        <td>ম্রদু বা গম্ভীর</td>
                    </tr>
                    <tr>
                        <td><strong>উদাহরণ</strong></td>
                        <td>ক, খ, চ, ছ, ট, ঠ, ত, থ, প, ফ</td>
                        <td>গ, ঘ, জ, ঝ, ড, ঢ, দ, ধ, ব, ভ</td>
                    </tr>
                </tbody>
            </table>

            <div class="warning-box">
                <div class="box-title"><i class="fas fa-exclamation-triangle"></i> সাধারণ ভুল</div>
                <p>অনেকে মনে করেন মহাপ্রাণ = ঘোষ। কিন্তু এটি <strong>ভুল</strong>। মহাপ্রাণ ও ঘোষ দুটি ভিন্ন বিষয়।</p>
                <ul>
                    <li>মহাপ্রাণ = বাতাসের পরিমাণ বেশি (খ, ঘ...)</li>
                    <li>ঘোষ = স্বরতন্ত্রী কাঁপে (গ, ঘ...)</li>
                </ul>
            </div>

            <!-- ধ্বনি পরিবর্তনের নিয়ম -->
            <h2><i class="fas fa-exchange-alt"></i> ধ্বনি পরিবর্তনের নিয়ম</h2>
            <p>বাংলা ভাষায় ধ্বনি পরিবর্তনের কিছু নিয়ম আছে। এগুলো পরীক্ষায় খুব গুরুত্বপূর্ণ।</p>

            <div class="definition-box">
                <div class="box-title">১. স্বরাগম (Epenthesis)</div>
                <p>দুটি ব্যঞ্জনধ্বনির মাঝখানে একটি স্বরধ্বনির যোগ হওয়াকে স্বরাগম বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>গ্রাম → গরাম</li>
                    <li>বিদ্যা → বিদিয়া</li>
                    <li>চন্দ্র → চাঁদ</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">২. স্বরভক্তি</div>
                <p>বিদেশী শব্দে স্বরধ্বনি যোগ করে উচ্চারণ সহজ করাকে স্বরভক্তি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>স্কুল → ইস্কুল</li>
                    <li>স্টেশন → ইস্টেশন</li>
                    <li>প্লেট → পিলেট</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. অভিশ্রুতি</div>
                <p>এক ধ্বনির স্থানে অন্য ধ্বনির উচ্চারণ হওয়াকে অভিশ্রুতি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>ক্ষ → খ (ক্ষীর → খীর)</li>
                    <li>জ্ঞ → গ্‌ (জ্ঞান → গান)</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. অপিনিহিতি</div>
                <p>স্বরধ্বনির লোপ বা বিলোপ ঘটাকে অপিনিহিতি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>পদ্মা + অ + আসিল → পদ্মাসিল</li>
                    <li>হরি + অ + অ + আসিল → হরিশিল</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. সম্প্রকর্ষ</div>
                <p>দূরবর্তী ধ্বনির নিকটবর্তী হওয়াকে সম্প্রকর্ষ বলে।</p>
                <p><strong>উদাহরণ:</strong> বিদ্যালয় → বিদ্যালয় (যদিও 'য়' লেখা হয়, উচ্চারণে 'ও' বা 'অ' শোনা যায়)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৬. বিপ্রকর্ষ</div>
                <p>নিকটবর্তী ধ্বনির দূরবর্তী হওয়াকে বিপ্রকর্ষ বলে।</p>
                <p><strong>উদাহরণ:</strong> পবিত্র → পবিতর (মাঝখানে 'ত্র' এর স্থানে 'তর' উচ্চারণ)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৭. ধ্বনি লোপ</div>
                <p>কোনো ধ্বনি বাদ যাওয়াকে ধ্বনি লোপ বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>রাম + অ + অ + আসিল → রামাসিল ('অ' দুটি লোপ পেয়েছে)</li>
                    <li>হরি + অ + আসিল → হরিশিল</li>
                </ul>
            </div>

            <!-- Flowchart / Diagram -->
            <h2><i class="fas fa-project-diagram"></i> ধ্বনির সম্পূর্ণ শ্রেণিবিভাগ (Tree Diagram)</h2>
            
            <div class="diagram-container">
                <div class="diagram-title">বাংলা ধ্বনির শ্রেণিবিভাগ</div>
                <pre style="text-align: left; font-family: 'Noto Sans Bengali', sans-serif; line-height: 2;">
📌 ধ্বনি
│
├─ 🔤 স্বরধ্বনি (১১টি)
│   ├─ হ্রস্ব স্বর (৪টি): অ, ই, উ, ঋ
│   ├─ দীর্ঘ স্বর (৭টি): আ, ঈ, ঊ, এ, ঐ, ও, ঔ
│   ├─ মৌলিক স্বর (৫টি)
│   └─ যৌগিক স্বর (২টি): এ, ও
│
└─ 🔠 ব্যঞ্জনধ্বনি (৩৩টি)
    ├─ স্পর্শ ব্যঞ্জন (২৫টি)
    │   ├─ ক-বর্গ: ক, খ, গ, ঘ, ঙ
    │   ├─ চ-বর্গ: চ, ছ, জ, ঝ, ঞ
    │   ├─ ট-বর্গ: ট, ঠ, ড, ঢ, ণ
    │   ├─ ত-বর্গ: ত, থ, দ, ধ, ন
    │   └─ প-বর্গ: প, ফ, ব, ভ, ম
    ├─ অন্তঃস্থ ব্যঞ্জন (৪টি): য, র, ল, ব
    └─ উষ্ম ব্যঞ্জন (৪টি): শ, ষ, স, হ
                </pre>
            </div>

            <!-- শর্টকাট কৌশল -->
            <div class="shortcut-section">
                <h3><i class="fas fa-bolt"></i> শর্টকাট কৌশল (Shortcut Methods)</h3>
                
                <div class="shortcut-item">
                    <h4>১. ধ্বনি ও বর্ণ মনে রাখার টেকনিক</h4>
                    <p><strong>ধ্বনি:</strong> ধ্বনিত → ধ্বনি শোনা যায় (শব্দের সাথে "নি" যুক্ত করে পড়ুন → ধ্বনিত = শোনা)</p>
                    <p><strong>বর্ণ:</strong> বর্ণ → বর্ণনা = লেখা (বর্ণ দিয়ে বর্ণনা করা যায়)</p>
                </div>

                <div class="shortcut-item">
                    <h4>২. হ্রস্ব ও দীর্ঘ স্বর চেনার ট্রিক</h4>
                    <p>হ্রস্ব স্বরের নামের শেষে "অ" বা "উ" আছে → হ্রস্ব (অ, ই, উ, ঋ)</p>
                    <p>দীর্ঘ স্বরের নামের শেষে "আ" বা "ঈ" আছে → দীর্ঘ (আ, ঈ, ঊ, এ, ঐ, ও, ঔ)</p>
                </div>

                <div class="shortcut-item">
                    <h4>৩. মহাপ্রাণ বর্ণ মনে রাখার টেকনিক</h4>
                    <p><strong>"খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ"</strong></p>
                    <p>মনে রাখার কৌশল: প্রতিটি বর্গের ২য় ও ৪র্থ বর্ণ → মহাপ্রাণ।</p>
                </div>

                <div class="shortcut-item">
                    <h4>৪. উচ্চারণের স্থান মনে রাখার টেকনিক</h4>
                    <p><strong>ক</strong>ণ্ঠ → <strong>ক</strong>থা বলা</p>
                    <p><strong>তা</strong>লু → <strong>চ</strong>া</p>
                    <p><strong>ট</strong>ুপি → মূ<strong>র</strong>ধা</p>
                    <p><strong>দা</strong>ঁত → <strong>ত</strong>াল</p>
                    <p><strong>প</strong>াখি → ও<strong>ষ</strong>্ঠ</p>
                </div>

                <div class="shortcut-item">
                    <h4>৫. ধ্বনি পরিবর্তনের নিয়ম মনে রাখার টেকনিক</h4>
                    <p><strong>স্বরাগম:</strong> স্বর + আগম = স্বর আসছে → গ্রাম → গরাম</p>
                    <p><strong>স্বরভক্তি:</strong> স্বর ভাগ হচ্ছে → বিদ্যা → বিদিয়া</p>
                    <p><strong>অভিশ্রুতি:</strong> ভ্রান্ত শ্রুতি → ভুল শুনছি → ক্ষ → খ</p>
                </div>
            </div>

            <!-- পরীক্ষায় কী আসতে পারে -->
            <div class="exam-focus-section">
                <h3><i class="fas fa-bullseye"></i> পরীক্ষায় কী কী আসতে পারে (Exam Focus)</h3>
                
                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ গুরুত্বপূর্ণ টপিকসমূহ:</strong>
                        <ul>
                            <li>ধ্বনি ও বর্ণের সংজ্ঞা ও পার্থক্য (প্রায়শই MCQ আসে)</li>
                            <li>মহাপ্রাণ ও অল্পপ্রাণ বর্ণের তালিকা</li>
                            <li>উচ্চারণের স্থান অনুযায়ী বর্ণের শ্রেণিবিভাগ</li>
                            <li>অঘোষ ও ঘোষ ধ্বনির পার্থক্য</li>
                            <li>ধ্বনি পরিবর্তনের ৭টি নিয়ম (স্বরাগম, স্বরভক্তি ইত্যাদি)</li>
                            <li>ব্যঞ্জনধ্বনির ৫টি বর্গ ও তাদের উচ্চারণ স্থান</li>
                        </ul>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্রায়শই জিজ্ঞাসিত প্রশ্ন (Most Repeated Questions):</strong>
                        <ol>
                            <li>ধ্বনি ও বর্ণের মধ্যে প্রধান পার্থক্য কী?</li>
                            <li>মহাপ্রাণ বর্ণ কয়টি ও কী কী?</li>
                            <li>উচ্চারণের স্থান অনুযায়ী 'ক' কোন ধ্বনি?</li>
                            <li>স্বরাগম কাকে বলে? উদাহরণ দাও।</li>
                            <li>হ্রস্ব স্বর ও দীর্ঘ স্বরের পার্থক্য লেখো।</li>
                        </ol>
                    </div>
                </div>
            </div>
        `,
        questions: [
            {
                question: "ধ্বনি ও বর্ণের মধ্যে প্রধান পার্থক্য কী?",
                options: [
                    "ধ্বনি লেখা যায়, বর্ণ শোনা যায়",
                    "ধ্বনি শোনা যায়, বর্ণ লেখা যায়",
                    "দুটি একই",
                    "কোনোটিই নয়"
                ],
                correct: 1,
                explanation: "ধ্বনি হলো মুখ থেকে উচ্চারিত শব্দাংশ যা শোনা যায় কিন্তু লেখা যায় না। আর বর্ণ হলো ধ্বনির লিখিত রূপ, যা লেখা যায় কিন্তু শোনা যায় না।",
                trick: "ট্রিক: ধ্বনি = ধ্বনিত = শোনা | বর্ণ = বর্ণনা = লেখা"
            },
            {
                question: "নিচের কোনটি হ্রস্ব স্বর?",
                options: [
                    "আ",
                    "ঈ",
                    "অ",
                    "ঐ"
                ],
                correct: 2,
                explanation: "হ্রস্ব স্বর ৪টি: অ, ই, উ, ঋ। এগুলো অল্প সময়ের জন্য উচ্চারিত হয়। আ, ঈ, ঐ হলো দীর্ঘ স্বর।",
                trick: "ট্রিক: হ্রস্ব স্বরের নামের শেষে 'অ' বা 'উ' আছে।"
            },
            {
                question: "মহাপ্রাণ বর্ণ কয়টি?",
                options: [
                    "৮টি",
                    "৯টি",
                    "১০টি",
                    "১১টি"
                ],
                correct: 2,
                explanation: "মহাপ্রাণ বর্ণ ১০টি: খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ।",
                trick: "ট্রিক: খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ — মনে রাখুন।"
            },
            {
                question: "'ক' ধ্বনির উচ্চারণের স্থান কোথায়?",
                options: [
                    "তালব্য",
                    "কণ্ঠ্য",
                    "মূর্ধন্য",
                    "দন্ত্য"
                ],
                correct: 1,
                explanation: "'ক' ধ্বনির উচ্চারণের স্থান কণ্ঠ্য। ক-বর্গের সব বর্ণই কণ্ঠ্য।",
                trick: "ট্রিক: 'ক'ণ্ঠ্য → 'ক' দিয়ে মনে রাখুন।"
            },
            {
                question: "নিচের কোনটি ঘোষ ধ্বনি?",
                options: [
                    "ক",
                    "খ",
                    "গ",
                    "চ"
                ],
                correct: 2,
                explanation: "গ, ঘ, জ, ঝ, ড, ঢ, দ, ধ, ব, ভ — এগুলো ঘোষ ধ্বনি। 'গ' একটি ঘোষ ধ্বনি।",
                trick: "ট্রিক: প্রতিটি বর্গের ৩য় ও ৫ম বর্ণ = ঘোষ।"
            },
            {
                question: "স্বরাগম কাকে বলে?",
                options: [
                    "ধ্বনি লোপ পেলে",
                    "দুটি ব্যঞ্জনের মাঝে স্বরযোগ হলে",
                    "এক ধ্বনির স্থানে অন্য ধ্বনি হলে",
                    "স্বরধ্বনি লোপ পেলে"
                ],
                correct: 1,
                explanation: "দুটি ব্যঞ্জনধ্বনির মাঝখানে একটি স্বরধ্বনির যোগ হওয়াকে স্বরাগম বলে। যেমন: গ্রাম → গরাম।",
                trick: "ট্রিক: স্বর + আগম = স্বর আসছে → স্বরাগম।"
            },
            {
                question: "বাংলা স্বরধ্বনি কয়টি?",
                options: [
                    "৯টি",
                    "১০টি",
                    "১১টি",
                    "১২টি"
                ],
                correct: 2,
                explanation: "বাংলা স্বরধ্বনি ১১টি: ৪টি হ্রস্ব (অ, ই, উ, ঋ) ও ৭টি দীর্ঘ (আ, ঈ, ঊ, এ, ঐ, ও, ঔ)।",
                trick: "ট্রিক: ৪ + ৭ = ১১টি স্বরধ্বনি।"
            },
            {
                question: "নিচের কোনটি অন্তঃস্থ ব্যঞ্জন?",
                options: [
                    "ক",
                    "চ",
                    "য",
                    "শ"
                ],
                correct: 2,
                explanation: "অন্তঃস্থ ব্যঞ্জন ৪টি: য, র, ল, ব। 'য' একটি অন্তঃস্থ ব্যঞ্জন।",
                trick: "ট্রিক: য, র, ল, ব — মনে রাখুন।"
            },
            {
                question: "প-বর্গের বর্ণগুলো কোন উচ্চারণ স্থানের?",
                options: [
                    "কণ্ঠ্য",
                    "তালব্য",
                    "ওষ্ঠ্য",
                    "দন্ত্য"
                ],
                correct: 2,
                explanation: "প-বর্গের বর্ণগুলো (প, ফ, ব, ভ, ম) ওষ্ঠ্য উচ্চারণ স্থানের। ওষ্ঠ = ঠোঁট।",
                trick: "ট্রিক: পাখি → ওষ্ঠ্য (ঠোঁট দিয়ে 'প' উচ্চারণ করা হয়)।"
            },
            {
                question: "অপিনিহিতি কাকে বলে?",
                options: [
                    "ধ্বনি যোগ হওয়াকে",
                    "ধ্বনি লোপ পাওয়াকে",
                    "ধ্বনির পরিবর্তন হওয়াকে",
                    "ধ্বনির স্থানান্তরকে"
                ],
                correct: 1,
                explanation: "স্বরধ্বনির লোপ বা বিলোপ ঘটাকে অপিনিহিতি বলে। যেমন: হরি + অ + আসিল → হরিশিল।",
                trick: "ট্রিক: অপিনিহিতি = অপ + নিহিতি = নিহিতি লোপ = ধ্বনি লোপ।"
            }
        ]
    },

    // Chapter 2: শব্দ ও পদের শ্রেণিবিভাগ
    2: {
        id: 2,
        title: 'শব্দ ও পদের শ্রেণিবিভাগ',
        englishTitle: 'Parts of Speech',
        category: 'grammar',
        content: `
            <!-- সংজ্ঞা ও ব্যাখ্যা -->
            <h2><i class="fas fa-info-circle"></i> সংজ্ঞা ও ব্যাখ্যা</h2>
            
            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> শব্দ কী?</div>
                <p>শব্দ হলো ভাষার ক্ষুদ্রতম একক যার সাহায্যে আমরা আমাদের মনের ভাব প্রকাশ করি। শব্দের অর্থ নির্দিষ্ট ও সুনির্দিষ্ট।</p>
                <p><em>উদাহরণ: বাংলা, ভাষা, আমি, তুমি, সে, পড়ি — এগুলো সব শব্দ।</em></p>
            </div>

            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> পদ কী?</div>
                <p>বাক্য গঠনে যে সব শব্দ ব্যবহার করা হয়, তাদের <strong>বিভক্তিযুক্ত</strong> বা <strong>কারকযুক্ত</strong> অবস্থায় পদ বলে। অর্থাৎ, বাক্যে ব্যবহৃত শব্দকে পদ বলে।</p>
                <p><strong>সহজ কথায়:</strong> শব্দ + বিভক্তি = পদ</p>
                <p><em>উদাহরণ: "রাম বই পড়ে" — এখানে 'রাম', 'বই', 'পড়ে' হলো পদ।</em></p>
            </div>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন</div>
                <p><strong>সকল পদই শব্দ, কিন্তু সকল শব্দ পদ নয়।</strong></p>
                <p>শব্দ স্বাধীনভাবে থাকতে পারে, কিন্তু পদ বাক্যের মধ্যে থাকতে হয়।</p>
            </div>

            <div class="warning-box">
                <div class="box-title"><i class="fas fa-exclamation-triangle"></i> সাধারণ ভুল</div>
                <p>অনেকে মনে করেন শব্দ ও পদ একই। কিন্তু এটি <strong>ভুল</strong>।</p>
                <ul>
                    <li>শব্দ: ভাষার একক (যেমন: ছাত্র)</li>
                    <li>পদ: বাক্যে ব্যবহৃত শব্দ (যেমন: ছাত্রটি বই পড়ছে — এখানে 'ছাত্রটি' একটি পদ)</li>
                </ul>
            </div>

            <!-- ৫ প্রকার পদ -->
            <h2><i class="fas fa-layer-group"></i> ৫ প্রকার পদ</h2>
            <p>বাংলা ব্যাকরণে পদ ৫ প্রকার:</p>
            <ol>
                <li><strong>বিশেষ্য</strong> (Noun)</li>
                <li><strong>বিশেষণ</strong> (Adjective)</li>
                <li><strong>সর্বনাম</strong> (Pronoun)</li>
                <li><strong>ক্রিয়া</strong> (Verb)</li>
                <li><strong>অব্যয়</strong> (Indeclinable)</li>
            </ol>

            <!-- বিশেষ্য -->
            <h2><i class="fas fa-user"></i> ১. বিশেষ্য (Noun)</h2>
            
            <div class="definition-box">
                <div class="box-title">বিশেষ্য কাকে বলে?</div>
                <p>যে পদে কোনো ব্যক্তি, বস্তু, স্থান, জাতি বা গুণের নাম বোঝায়, তাকে <strong>বিশেষ্য</strong> বলে।</p>
                <p><em>উদাহরণ: রাম, সীতা, বই, কলম, কলকাতা, ভারত, সাহস, সততা।</em></p>
            </div>

            <h3>বিশেষ্যের প্রকারভেদ (৬ প্রকার)</h3>

            <div class="definition-box">
                <div class="box-title">১. সংজ্ঞাবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো নির্দিষ্ট ব্যক্তি বা বস্তুর নাম বোঝায়, তাকে সংজ্ঞাবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> রবীন্দ্রনাথ ঠাকুর, প্রধানমন্ত্রী, গঙ্গা নদী, হিমালয় পর্বত।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. জাতিবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে একই জাতির বা শ্রেণির নাম বোঝায়, তাকে জাতিবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> ছাত্র, শিক্ষক, গাছ, নদী, পাহাড়, মানুষ।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. বস্তুবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো বস্তুর নাম বোঝায়, তাকে বস্তুবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> কলম, বই, টেবিল, চেয়ার, জল, বাতাস।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. সমষ্টিবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো একটি সমষ্টি বা দল বোঝায়, তাকে সমষ্টিবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> দল, সৈন্যদল, বাহিনী, পরিবার, জুরি (জোড়া)।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. ভাববাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো গুণ, অবস্থা বা ভাব বোঝায়, তাকে ভাববাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> সৌন্দর্য, বুদ্ধি, সাহস, সততা, লজ্জা, ক্ষুধা।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৬. গুণবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো ব্যক্তি বা বস্তুর গুণ বোঝায়, তাকে গুণবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> বড়, ছোট, ভালো, মন্দ, কালো, সাদা।</p>
                <p><em>দ্রষ্টব্য: অনেক ব্যাকরণে গুণবাচক বিশেষ্যকে বিশেষণের অন্তর্ভুক্ত করা হয়।</em></p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র: বিশেষ্য চেনার উপায়</div>
                <p>যে শব্দের আগে <strong>'টি', 'গুলি', 'এর'</strong> যোগ করা যায়, তা <strong>বিশেষ্য</strong>।</p>
                <p><em>উদাহরণ: ছাত্র → ছাত্রটি, ছাত্রগুলি, ছাত্রের।</em></p>
            </div>

            <!-- বিশেষণ -->
            <h2><i class="fas fa-ad"></i> ২. বিশেষণ (Adjective)</h2>

            <div class="definition-box">
                <div class="box-title">বিশেষণ কাকে বলে?</div>
                <p>যে পদ দিয়ে কোনো বিশেষ্য বা সর্বনামের গুণ, দোষ, সংখ্যা বা পরিমাণ প্রকাশ করা হয়, তাকে <strong>বিশেষণ</strong> বলে।</p>
                <p><em>উদাহরণ: বড় ছেলে, পাঁচ কলম, সুন্দর ফুল। এখানে 'বড়', 'পাঁচ', 'সুন্দর' হলো বিশেষণ।</em></p>
            </div>

            <h3>বিশেষণের প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. নাম বিশেষণ</div>
                <p>যে বিশেষণ কোনো বিশেষ্য বা সর্বনামের গুণ বা দোষ প্রকাশ করে, তাকে নাম বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> সুন্দর, বড়, ছোট, ভালো, মন্দ, কালো।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. ক্রিয়া বিশেষণ</div>
                <p>যে পদ দিয়ে ক্রিয়ার মান বা বিশেষত্ব প্রকাশ করা হয়, তাকে ক্রিয়া বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> সে ধীরে ধীরে হাঁটে। (ধীরে ধীরে = ক্রিয়া বিশেষণ)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. বিশেষণের বিশেষণ</div>
                <p>যে বিশেষণ অন্য বিশেষণের মান বা বিশেষত্ব প্রকাশ করে, তাকে বিশেষণের বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> খুব সুন্দর, অত্যন্ত বড়। (খুব, অত্যন্ত = বিশেষণের বিশেষণ)</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র: বিশেষণ চেনার উপায়</div>
                <p>যে শব্দের পরে <strong>বিশেষ্য</strong> থাকে, তা <strong>বিশেষণ</strong>।</p>
                <p><em>উদাহরণ: সুন্দর (বিশেষণ) + ফুল (বিশেষ্য)</em></p>
            </div>

            <!-- সর্বনাম -->
            <h2><i class="fas fa-user-friends"></i> ৩. সর্বনাম (Pronoun)</h2>

            <div class="definition-box">
                <div class="box-title">সর্বনাম কাকে বলে?</div>
                <p>বিশেষ্যের পরিবর্তে ব্যবহৃত পদকে <strong>সর্বনাম</strong> বলে। অর্থাৎ, সব কিছুর নামই হলো সর্বনাম।</p>
                <p><em>উদাহরণ: আমি, তুমি, সে, এ, তা, কে, কারা।</em></p>
            </div>

            <h3>সর্বনামের প্রকারভেদ</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>প্রকার</th>
                        <th>সংজ্ঞা</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>ব্যক্তিবাচক</strong></td>
                        <td>নির্দিষ্ট ব্যক্তিকে বোঝায়</td>
                        <td>আমি, তুমি, সে, আমরা</td>
                    </tr>
                    <tr>
                        <td><strong>নির্দেশক</strong></td>
                        <td>নির্দিষ্ট বস্তুকে নির্দেশ করে</td>
                        <td>এ, ও, ইহা, উহা</td>
                    </tr>
                    <tr>
                        <td><strong>প্রশ্নবাচক</strong></td>
                        <td>প্রশ্ন করতে ব্যবহৃত</td>
                        <td>কে, কারা, কাকে</td>
                    </tr>
                    <tr>
                        <td><strong>অনির্দেশক</strong></td>
                        <td>অনিশ্চিত বা সাধারণ বোঝায়</td>
                        <td>কেউ, কিছু, কোনো</td>
                    </tr>
                    <tr>
                        <td><strong>সাপেক্ষ</strong></td>
                        <td>আশ্রয় বা সাপেক্ষতা বোঝায়</td>
                        <td>যে, তাহা, যারা</td>
                    </tr>
                    <tr>
                        <td><strong>আত্মবাচক</strong></td>
                        <td>নিজেকে বোঝায়</td>
                        <td>নিজে, নিজেরা</td>
                    </tr>
                </tbody>
            </table>

            <!-- ক্রিয়া -->
            <h2><i class="fas fa-running"></i> ৪. ক্রিয়া (Verb)</h2>

            <div class="definition-box">
                <div class="box-title">ক্রিয়া কাকে বলে?</div>
                <p>যে পদ দিয়ে কোনো কাজ বা ভাব প্রকাশ করা হয়, তাকে <strong>ক্রিয়া</strong> বলে।</p>
                <p><em>উদাহরণ: পড়ি, লিখি, যাই, হাসি, কাঁদি।</em></p>
            </div>

            <h3>ক্রিয়ার প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. সকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়া ক্রিয়ার সাথে কর্ম থাকে, তাকে সকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> রাম বই <u>পড়ে</u>। (বই = কর্ম)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. অকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়ার সাথে কর্ম থাকে না, তাকে অকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে <u>হাসে</u>। (কর্ম নেই)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. দ্বিকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়ার সাথে দুটি কর্ম থাকে (মুখ্য ও গৌণ), তাকে দ্বিকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> শিক্ষক ছাত্রকে <u>বইটি দিলেন</u>। (ছাত্রকে = মুখ্য কর্ম, বইটি = গৌণ কর্ম)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. সমাপিকা ক্রিয়া</div>
                <p>বাক্যের শেষে যে ক্রিয়া থাকে এবং বাক্যকে সমাপ্ত করে, তাকে সমাপিকা ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে বই পড়ে<strong>।</strong> (পড়ে = সমাপিকা ক্রিয়া)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. অসমাপিকা ক্রিয়া</div>
                <p>বাক্যের শেষে না থেকে যে ক্রিয়া বাক্যকে অসমাপ্ত রাখে, তাকে অসমাপিকা ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে বই <u>পড়ে</u> ঘুমায়। (পড়ে = অসমাপিকা ক্রিয়া)</p>
            </div>

            <!-- অব্যয় -->
            <h2><i class="fas fa-anchor"></i> ৫. অব্যয় (Indeclinable)</h2>

            <div class="definition-box">
                <div class="box-title">অব্যয় কাকে বলে?</div>
                <p>যে পদের রূপ বা রূপভেদ হয় না, তাকে <strong>অব্যয়</strong> বলে। অর্থাৎ, যে শব্দের বিভক্তি নেই, তাকে অব্যয় বলে।</p>
                <p><em>উদাহরণ: এবং, অথবা, কিন্তু, যদি, তবে, হ্যাঁ, না।</em></p>
            </div>

            <h3>অব্যয়ের প্রকারভেদ</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>প্রকার</th>
                        <th>সংজ্ঞা</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সমুচ্চয়ী</strong></td>
                        <td>যোগ করতে ব্যবহৃত</td>
                        <td>এবং, ও, আর</td>
                    </tr>
                    <tr>
                        <td><strong>অনন্বয়ী</strong></td>
                        <td>বিয়োগ বা বিকল্প করতে ব্যবহৃত</td>
                        <td>অথবা, নয়তো</td>
                    </tr>
                    <tr>
                        <td><strong>অনুকার</strong></td>
                        <td>অনুমোদন বা স্বীকৃতি বোঝায়</td>
                        <td>হ্যাঁ, না, ঠিক আছে</td>
                    </tr>
                    <tr>
                        <td><strong>পদান্বয়ী</strong></td>
                        <td>পদের সাথে যুক্ত থাকে</td>
                        <td>কিন্তু, তবু, তাই</td>
                    </tr>
                </tbody>
            </table>

            <!-- পদ পরিবর্তন -->
            <h2><i class="fas fa-exchange-alt"></i> পদ পরিবর্তন (Conversion between Parts of Speech)</h2>
            
            <div class="definition-box">
                <div class="box-title">বিশেষ্য → বিশেষণ</div>
                <p>অনেক বিশেষ্য শব্দের শেষে '-ইক', '-কার', '-ময়', '-সার' যোগ করে বিশেষণ তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষ্য</th>
                            <th>বিশেষণ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>শিশু</td><td>শিশুক</td></tr>
                        <tr><td>মাটি</td><td>মাটিক</td></tr>
                        <tr><td>জল</td><td>জলকর</td></tr>
                        <tr><td>ফুল</td><td>ফুলক</td></tr>
                        <tr><td>বালু</td><td>বালুক</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="definition-box">
                <div class="box-title">বিশেষণ → বিশেষ্য</div>
                <p>অনেক বিশেষণ শব্দের শেষে '-তা', '-ত্ব', '-য' যোগ করে বিশেষ্য তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষণ</th>
                            <th>বিশেষ্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>সুন্দর</td><td>সৌন্দর্য</td></tr>
                        <tr><td>বুদ্ধিমান</td><td>বুদ্ধিমত্তা</td></tr>
                        <tr><td>সাহসী</td><td>সাহস</td></tr>
                        <tr><td>লজ্জিত</td><td>লজ্জা</td></tr>
                        <tr><td>ভালো</td><td>ভলোই</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="definition-box">
                <div class="box-title">বিশেষণ → ক্রিয়াবিশেষণ</div>
                <p>বিশেষণের শেষে '-ভাবে' যোগ করে ক্রিয়াবিশেষণ তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষণ</th>
                            <th>ক্রিয়াবিশেষণ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>সুন্দর</td><td>সুন্দরভাবে</td></tr>
                        <tr><td>ধীর</td><td>ধীরে</td></tr>
                        <tr><td>দ্রুত</td><td>দ্রুতগতিতে</td></tr>
                        <tr><td>সঠিক</td><td>সঠিকভাবে</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- শর্টকাট কৌশল -->
            <div class="shortcut-section">
                <h3><i class="fas fa-bolt"></i> শর্টকাট কৌশল (Shortcut Methods)</h3>
                
                <div class="shortcut-item">
                    <h4>১. ৫ প্রকার পদ মনে রাখার টেকনিক</h4>
                    <p><strong>"বিশেষ সর্ব ক্রিয়া অব"</strong></p>
                    <p>বিশেষ = বিশেষ্য</p>
                    <p>সর্ব = সর্বনাম</p>
                    <p>ক্রিয়া = ক্রিয়া</p>
                    <p>অব = অব্যয়</p>
                    <p><em>(বিশেষণ বাদ পড়ে গেলে মনে রাখুন: বিশেষ্যের পরে বিশেষণ)</em></p>
                </div>

                <div class="shortcut-item">
                    <h4>২. বিশেষ্যের ৬ প্রকার মনে রাখার টেকনিক</h4>
                    <p><strong>"সংজ্ঞা জাতি বস্তু সমষ্টি ভাব গুণ"</strong></p>
                    <p>সংজ্ঞা = সংজ্ঞাবাচক</p>
                    <p>জাতি = জাতিবাচক</p>
                    <p>বস্তু = বস্তুবাচক</p>
                    <p>সমষ্টি = সমষ্টিবাচক</p>
                    <p>ভাব = ভাববাচক</p>
                    <p>গুণ = গুণবাচক</p>
                </div>

                <div class="shortcut-item">
                    <h4>৩. সর্বনামের ৬ প্রকার মনে রাখার টেকনিক</h4>
                    <p><strong>"ব্যক্তি নির্দেশ প্রশ্ন অনির্দেশ সাপেক্ষ আত্ম"</strong></p>
                    <p>ব্যক্তি = ব্যক্তিবাচক</p>
                    <p>নির্দেশ = নির্দেশক</p>
                    <p>প্রশ্ন = প্রশ্নবাচক</p>
                    <p>অনির্দেশ = অনির্দেশক</p>
                    <p>সাপেক্ষ = সাপেক্ষ</p>
                    <p>আত্ম = আত্মবাচক</p>
                </div>

                <div class="shortcut-item">
                    <h4>৪. ক্রিয়ার প্রকার চেনার ট্রিক</h4>
                    <p><strong>সকর্মক:</strong> যে ক্রিয়ার পরে 'কে' বা 'কে/কিছু' থাকে।</p>
                    <p><strong>অকর্মক:</strong> যে ক্রিয়ার পরে 'কে' যোগ করা যায় না।</p>
                    <p><em>উদাহরণ: সে বই পড়ে। (পড়ে → সকর্মক কারণ 'বই' কর্ম)</em></p>
                    <p><em>উদাহরণ: সে হাসে। (হাসে → অকর্মক কারণ 'কাকে হাসে?' করা যায় না)</em></p>
                </div>

                <div class="shortcut-item">
                    <h4>৫. সমাপিকা ও অসমাপিকা ক্রিয়া চেনার ট্রিক</h4>
                    <p><strong>সমাপিকা:</strong> বাক্যের শেষে থাকে এবং হাততালি দিলে বাক্য শেষ বোঝা যায়।</p>
                    <p><strong>অসমাপিকা:</strong> বাক্যের মাঝখানে থাকে, হাততালি দিলে বাক্য অসমাপ্ত মনে হয়।</p>
                    <p><em>উদাহরণ: সে বই পড়ে<strong>✋</strong> (সমাপিকা)</em></p>
                    <p><em>উদাহরণ: সে বই পড়ে... <strong>(আরও কিছু বাকি)</strong> (অসমাপিকা)</em></p>
                </div>
            </div>

            <!-- পরীক্ষায় কী আসতে পারে -->
            <div class="exam-focus-section">
                <h3><i class="fas fa-bullseye"></i> পরীক্ষায় কী কী আসতে পারে (Exam Focus)</h3>
                
                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ গুরুত্বপূর্ণ টপিকসমূহ:</strong>
                        <ul>
                            <li>শব্দ ও পদের সংজ্ঞা ও পার্থক্য</li>
                            <li>৫ প্রকার পদের নাম ও সংজ্ঞা</li>
                            <li>বিশেষ্যের ৬ প্রকার ও উদাহরণ</li>
                            <li>বিশেষণের প্রকারভেদ</li>
                            <li>সর্বনামের ৬ প্রকার</li>
                            <li>ক্রিয়ার প্রকারভেদ (সকর্মক, অকর্মক, দ্বিকর্মক)</li>
                            <li>অব্যয়ের প্রকারভেদ</li>
                            <li>পদ পরিবর্তনের তালিকা (বিশেষ্য → বিশেষণ, ইত্যাদি)</li>
                        </ul>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্রায়শই জিজ্ঞাসিত প্রশ্ন (Most Repeated Questions):</strong>
                        <ol>
                            <li>শব্দ ও পদের মধ্যে পার্থক্য কী?</li>
                            <li>বিশেষ্য কাকে বলে? এর প্রকারভেদ লেখো।</li>
                            <li>সর্বনামের প্রকারভেদ লেখো।</li>
                            <li>সকর্মক ও অকর্মক ক্রিয়ার পার্থক্য দাও।</li>
                            <li>অব্যয় কাকে বলে? উদাহরণ দাও।</li>
                            <li>নিচের শব্দটি কোন পদ — (MCQ আসে)</li>
                        </ol>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্র্যাকটিসের জন্য গুরুত্বপূর্ণ:</strong>
                        <p>যেকোনো শব্দ দেওয়া থাকবে এবং জিজ্ঞাসা করা হবে — "নিচের কোনটি বিশেষ্য?" বা "নিচের কোনটি বিশেষণ?" ইত্যাদি।</p>
                        <p><strong>ট্রিক:</strong> শব্দের অর্থ দেখুন — যদি নাম বোঝায় → বিশেষ্য; যদি গুণ বোঝায় → বিশেষণ; যদি কাজ বোঝায় → ক্রিয়া।</p>
                    </div>
                </div>
            </div>
        `,
        questions: [
            {
                question: "শব্দ ও পদের মধ্যে প্রধান পার্থক্য কী?",
                options: [
                    "শব্দ স্বাধীন, পদ বাক্যের অংশ",
                    "দুটি একই",
                    "পদ স্বাধীন, শব্দ বাক্যের অংশ",
                    "কোনোটিই নয়"
                ],
                correct: 0,
                explanation: "শব্দ ভাষার ক্ষুদ্রতম একক, এটি স্বাধীনভাবে থাকতে পারে। কিন্তু পদ হলো বাক্যে ব্যবহৃত শব্দ (বিভক্তিযুক্ত শব্দ)। তাই সকল পদই শব্দ কিন্তু সকল শব্দ পদ নয়।",
                trick: "ট্রিক: শব্দ = স্বাধীন | পদ = বাক্যের মধ্যে।"
            },
            {
                question: "নিচের কোনটি বিশেষ্য?",
                options: [
                    "সুন্দর",
                    "দৌড়ায়",
                    "ছাত্র",
                    "এবং"
                ],
                correct: 2,
                explanation: "ছাত্র একটি জাতিবাচক বিশেষ্য। 'ছাত্রটি', 'ছাত্রগুলি' — এভাবে বিশেষ্য চেনা যায়। 'সুন্দর' বিশেষণ, 'দৌড়ায়' ক্রিয়া, 'এবং' অব্যয়।",
                trick: "ট্রিক: 'টি', 'গুলি', 'এর' যোগ করা যায় → বিশেষ্য।"
            },
            {
                question: "বিশেষ্যের প্রকারভেদ কয়টি?",
                options: [
                    "৪টি",
                    "৫টি",
                    "৬টি",
                    "৭টি"
                ],
                correct: 2,
                explanation: "বিশেষ্য ৬ প্রকার: ১. সংজ্ঞাবাচক, ২. জাতিবাচক, ৩. বস্তুবাচক, ৪. সমষ্টিবাচক, ৫. ভাববাচক, ৬. গুণবাচক।",
                trick: "ট্রিক: সংজ্ঞা জাতি বস্তু সমষ্টি ভাব গুণ = ৬টি।"
            },
            {
                question: "নিচের কোনটি ভাববাচক বিশেষ্য?",
                options: [
                    "ছাত্র",
                    "বই",
                    "সাহস",
                    "দল"
                ],
                correct: 2,
                explanation: "সাহস একটি ভাববাচক বিশেষ্য কারণ এটি একটি গুণ বা ভাব বোঝায়। ছাত্র = জাতিবাচক, বই = বস্তুবাচক, দল = সমষ্টিবাচক।",
                trick: "ট্রিক: যা অনুভূতি বা গুণ বোঝায় = ভাববাচক বিশেষ্য।"
            },
            {
                question: "বিশেষণ কাকে বলে?",
                options: [
                    "নামকে বোঝায়",
                    "কাজকে বোঝায়",
                    "বিশেষ্যের গুণ বা দোষ বোঝায়",
                    "সব কিছুকে বোঝায়"
                ],
                correct: 2,
                explanation: "বিশেষণ হলো এমন পদ যা বিশেষ্য বা সর্বনামের গুণ, দোষ, সংখ্যা বা পরিমাণ প্রকাশ করে। যেমন: বড় ছেলে — এখানে 'বড়' হলো বিশেষণ।",
                trick: "ট্রিক: বিশেষ্যের আগে থাকে = বিশেষণ।"
            },
            {
                question: "নিচের কোনটি সর্বনাম?",
                options: [
                    "বালক",
                    "পড়া",
                    "সে",
                    "বড়"
                ],
                correct: 2,
                explanation: "'সে' একটি ব্যক্তিবাচক সর্বনাম। সর্বনাম বিশেষ্যের পরিবর্তে ব্যবহৃত হয়। 'বালক' বিশেষ্য, 'পড়া' ক্রিয়া, 'বড়' বিশেষণ।",
                trick: "ট্রিক: আমি, তুমি, সে, এ, ও — এগুলো সর্বনাম।"
            },
            {
                question: "সকর্মক ক্রিয়ার বৈশিষ্ট্য কী?",
                options: [
                    "কর্ম থাকে না",
                    "কর্ম থাকে",
                    "দুটি কর্ম থাকে",
                    "কর্ম থাকতেও পারে, নাও থাকতে পারে"
                ],
                correct: 1,
                explanation: "সকর্মক ক্রিয়ার সাথে কর্ম থাকে। যেমন: রাম বই পড়ে। (পড়ে = সকর্মক ক্রিয়া, বই = কর্ম)।",
                trick: "ট্রিক: সকর্মক = স + কর্ম = কর্মসহ ক্রিয়া।"
            },
            {
                question: "নিচের কোনটি অব্যয়?",
                options: [
                    "রাম",
                    "পড়া",
                    "এবং",
                    "সুন্দর"
                ],
                correct: 2,
                explanation: "'এবং' একটি সমুচ্চয়ী অব্যয়। অব্যয়ের রূপ পরিবর্তন হয় না এবং বিভক্তি থাকে না। 'রাম' বিশেষ্য, 'পড়া' ক্রিয়া, 'সুন্দর' বিশেষণ।",
                trick: "ট্রিক: এবং, অথবা, কিন্তু, যদি — এগুলো অব্যয়।"
            },
            {
                question: "সমাপিকা ক্রিয়া কাকে বলে?",
                options: [
                    "বাক্যের মাঝখানে থাকে",
                    "বাক্যের শেষে থেকে বাক্য শেষ করে",
                    "কর্ম থাকে",
                    "কর্ম থাকে না"
                ],
                correct: 1,
                explanation: "সমাপিকা ক্রিয়া বাক্যের শেষে থাকে এবং বাক্যকে সমাপ্ত করে। যেমন: সে বই পড়ে। (এখানে 'পড়ে' সমাপিকা ক্রিয়া)",
                trick: "ট্রিক: সমাপিকা = সমাপ্ত করে।"
            },
            {
                question: "'সুন্দর' শব্দটি কোন পদ?",
                options: [
                    "বিশেষ্য",
                    "বিশেষণ",
                    "ক্রিয়া",
                    "সর্বনাম"
                ],
                correct: 1,
                explanation: "'সুন্দর' একটি বিশেষণ কারণ এটি 'ফুল' (বিশেষ্য) এর গুণ বোঝায়। সুন্দর ফুল — এখানে 'সুন্দর' বিশেষণ।",
                trick: "ট্রিক: বিশেষ্যের আগে থাকলে = বিশেষণ।"
            }
        ]
    }
};

/* ================================================================
   SECTION: storage.js — Storage Management (localStorage)
   ================================================================ */

/* ========================================
   PROVAKAR - Storage Management
   localStorage handling for all data
   ======================================== */

const Storage = {
    // Keys for localStorage
    keys: {
        THEME: 'provakar_theme',
        FONT_SIZE: 'provakar_font_size',
        COLOR_THEME: 'provakar_color_theme',
        QUIZ_MODE: 'provakar_quiz_mode',
        TIMER_ENABLED: 'provakar_timer_enabled',
        QUESTIONS_PER_QUIZ: 'provakar_questions_per_quiz',
        PROGRESS: 'provakar_progress',
        QUIZ_HISTORY: 'provakar_quiz_history',
        BOOKMARKS: 'provakar_bookmarks',
        NOTES: 'provakar_notes',
        SETTINGS: 'provakar_settings',
        CHAPTER_DATA: 'provakar_chapter_data'
    },

    // Initialize storage with defaults
    init() {
        // Theme
        if (!this.get(this.keys.THEME)) {
            this.set(this.keys.THEME, 'light');
        }

        // Font size
        if (!this.get(this.keys.FONT_SIZE)) {
            this.set(this.keys.FONT_SIZE, 'medium');
        }

        // Color theme
        if (!this.get(this.keys.COLOR_THEME)) {
            this.set(this.keys.COLOR_THEME, 'blue');
        }

        // Quiz mode
        if (!this.get(this.keys.QUIZ_MODE)) {
            this.set(this.keys.QUIZ_MODE, 'study');
        }

        // Timer
        if (this.get(this.keys.TIMER_ENABLED) === null) {
            this.set(this.keys.TIMER_ENABLED, true);
        }

        // Questions per quiz
        if (!this.get(this.keys.QUESTIONS_PER_QUIZ)) {
            this.set(this.keys.QUESTIONS_PER_QUIZ, '10');
        }

        // Progress
        if (!this.get(this.keys.PROGRESS)) {
            this.set(this.keys.PROGRESS, {});
        }

        // Quiz history
        if (!this.get(this.keys.QUIZ_HISTORY)) {
            this.set(this.keys.QUIZ_HISTORY, []);
        }

        // Bookmarks
        if (!this.get(this.keys.BOOKMARKS)) {
            this.set(this.keys.BOOKMARKS, []);
        }

        // Notes
        if (!this.get(this.keys.NOTES)) {
            this.set(this.keys.NOTES, {});
        }

        // Chapter data (questions, content)
        if (!this.get(this.keys.CHAPTER_DATA)) {
            this.set(this.keys.CHAPTER_DATA, {});
        }
    },

    // Get item from localStorage
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },

    // Set item in localStorage
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error writing to localStorage:', e);
            return false;
        }
    },

    // Remove item from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    },

    // Clear all PROVAKAR data
    clearAll() {
        Object.values(this.keys).forEach(key => {
            this.remove(key);
        });
    },

    // Export all data
    exportData() {
        const data = {};
        Object.entries(this.keys).forEach(([name, key]) => {
            data[name] = this.get(key);
        });
        return JSON.stringify(data, null, 2);
    },

    // Import data
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            Object.entries(data).forEach(([name, value]) => {
                if (this.keys[name]) {
                    this.set(this.keys[name], value);
                }
            });
            return true;
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    },

    // Progress tracking
    updateProgress(chapterNum, data) {
        const progress = this.get(this.keys.PROGRESS) || {};
        if (!progress[chapterNum]) {
            progress[chapterNum] = {};
        }
        progress[chapterNum] = { ...progress[chapterNum], ...data };
        progress[chapterNum].lastAccessed = new Date().toISOString();
        this.set(this.keys.PROGRESS, progress);
    },

    getProgress(chapterNum) {
        const progress = this.get(this.keys.PROGRESS) || {};
        return progress[chapterNum] || null;
    },

    getAllProgress() {
        return this.get(this.keys.PROGRESS) || {};
    },

    // Quiz history
    addQuizResult(result) {
        const history = this.get(this.keys.QUIZ_HISTORY) || [];
        result.timestamp = new Date().toISOString();
        history.push(result);
        // Keep only last 50 results
        if (history.length > 50) {
            history.splice(0, history.length - 50);
        }
        this.set(this.keys.QUIZ_HISTORY, history);
    },

    getQuizHistory() {
        return this.get(this.keys.QUIZ_HISTORY) || [];
    },

    // Bookmarks
    addBookmark(type, id, title) {
        const bookmarks = this.get(this.keys.BOOKMARKS) || [];
        bookmarks.push({ type, id, title, timestamp: new Date().toISOString() });
        this.set(this.keys.BOOKMARKS, bookmarks);
    },

    removeBookmark(type, id) {
        const bookmarks = this.get(this.keys.BOOKMARKS) || [];
        const filtered = bookmarks.filter(b => !(b.type === type && b.id === id));
        this.set(this.keys.BOOKMARKS, filtered);
    },

    getBookmarks() {
        return this.get(this.keys.BOOKMARKS) || [];
    },

    isBookmarked(type, id) {
        const bookmarks = this.getBookmarks();
        return bookmarks.some(b => b.type === type && b.id === id);
    },

    // Notes
    saveNote(chapterNum, note) {
        const notes = this.get(this.keys.NOTES) || {};
        if (!notes[chapterNum]) {
            notes[chapterNum] = [];
        }
        notes[chapterNum].push({ content: note, timestamp: new Date().toISOString() });
        this.set(this.keys.NOTES, notes);
    },

    getNotes(chapterNum) {
        const notes = this.get(this.keys.NOTES) || {};
        return notes[chapterNum] || [];
    },

    // Chapter data (for adding custom questions)
    addChapterQuestions(chapterNum, questions) {
        const data = this.get(this.keys.CHAPTER_DATA) || {};
        if (!data[chapterNum]) {
            data[chapterNum] = { questions: [] };
        }
        data[chapterNum].questions.push(...questions);
        this.set(this.keys.CHAPTER_DATA, data);
    },

    getChapterQuestions(chapterNum) {
        const data = this.get(this.keys.CHAPTER_DATA) || {};
        if (data[chapterNum] && data[chapterNum].questions) {
            return data[chapterNum].questions;
        }
        return [];
    }
};

/* ================================================================
   SECTION: app.js — Main Application Logic
   ================================================================ */

/* ========================================
   PROVAKAR - Main Application Logic
   ======================================== */

const App = {
    // Initialize the application
    init() {
        this.applyTheme();
        this.applyFontSize();
        this.applyColorTheme();
        this.setupEventListeners();
        this.updateProgressBars();
        this.updateRecentActivity();
        this.hideLoadingScreen();
    },

    // Apply saved theme
    applyTheme() {
        const theme = Storage.get(Storage.keys.THEME) || 'light';
        document.body.setAttribute('data-theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        // Update settings modal if open
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === theme);
        });
    },

    // Apply saved font size
    applyFontSize() {
        const fontSize = Storage.get(Storage.keys.FONT_SIZE) || 'medium';
        document.body.setAttribute('data-font-size', fontSize);

        const fontOptions = document.querySelectorAll('.font-size-option');
        fontOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.size === fontSize);
        });
    },

    // Apply saved color theme
    applyColorTheme() {
        const colorTheme = Storage.get(Storage.keys.COLOR_THEME) || 'blue';
        document.body.setAttribute('data-color-theme', colorTheme);

        const colorOptions = document.querySelectorAll('.color-theme-option');
        colorOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.color === colorTheme);
        });
    },

    // Setup event listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Settings button
        const settingsBtn = document.getElementById('settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const settingsClose = document.getElementById('settings-close');
        
        if (settingsBtn && settingsModal) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.classList.add('active');
            });
        }

        if (settingsClose && settingsModal) {
            settingsClose.addEventListener('click', () => {
                settingsModal.classList.remove('active');
            });
        }

        // Close modal on overlay click
        if (settingsModal) {
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) {
                    settingsModal.classList.remove('active');
                }
            });
        }

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });
        }

        // FAB (Floating Action Button)
        const fabBtn = document.getElementById('fab-btn');
        const fabPanel = document.getElementById('fab-panel');
        const fabPanelClose = document.getElementById('fab-panel-close');
        
        if (fabBtn && fabPanel) {
            fabBtn.addEventListener('click', () => {
                fabPanel.classList.toggle('active');
            });
        }

        if (fabPanelClose && fabPanel) {
            fabPanelClose.addEventListener('click', () => {
                fabPanel.classList.remove('active');
            });
        }

        // Close FAB panel on outside click
        document.addEventListener('click', (e) => {
            if (fabBtn && fabPanel && !fabBtn.contains(e.target) && !fabPanel.contains(e.target)) {
                fabPanel.classList.remove('active');
            }
        });

        // Settings tabs
        const settingsTabs = document.querySelectorAll('.settings-tab');
        settingsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                // Update active tab
                settingsTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show target panel
                const panels = document.querySelectorAll('.settings-panel');
                panels.forEach(p => p.classList.remove('active'));
                const targetPanel = document.getElementById(`${targetTab}-settings`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });

        // Theme options in settings
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                Storage.set(Storage.keys.THEME, theme);
                this.applyTheme();
            });
        });

        // Font size options
        const fontSizeOptions = document.querySelectorAll('.font-size-option');
        fontSizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const size = option.dataset.size;
                Storage.set(Storage.keys.FONT_SIZE, size);
                this.applyFontSize();
            });
        });

        // Color theme options
        const colorThemeOptions = document.querySelectorAll('.color-theme-option');
        colorThemeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const color = option.dataset.color;
                Storage.set(Storage.keys.COLOR_THEME, color);
                this.applyColorTheme();
            });
        });

        // Data management buttons
        const exportBtn = document.getElementById('export-data');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportData());
        }

        const importBtn = document.getElementById('import-data');
        const importFile = document.getElementById('import-file');
        if (importBtn && importFile) {
            importBtn.addEventListener('click', () => importFile.click());
            importFile.addEventListener('change', (e) => this.importData(e));
        }

        const resetBtn = document.getElementById('reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Page transition
        this.setupPageTransitions();
    },

    // Toggle theme
    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        Storage.set(Storage.keys.THEME, newTheme);
        this.applyTheme();
    },

    // Update progress bars on home page
    updateProgressBars() {
        const progress = Storage.getAllProgress();
        const grammarProgress = this.calculateCategoryProgress(progress, 1, 10);
        const vocabularyProgress = this.calculateCategoryProgress(progress, 11, 16);
        const literatureProgress = this.calculateCategoryProgress(progress, 17, 17);

        const grammarFill = document.getElementById('grammar-progress');
        const vocabularyFill = document.getElementById('vocabulary-progress');
        const literatureFill = document.getElementById('literature-progress');

        if (grammarFill) {
            grammarFill.style.width = `${grammarProgress}%`;
            grammarFill.parentElement.nextElementSibling.textContent = `${grammarProgress}% সম্পন্ন`;
        }

        if (vocabularyFill) {
            vocabularyFill.style.width = `${vocabularyProgress}%`;
            vocabularyFill.parentElement.nextElementSibling.textContent = `${vocabularyProgress}% সম্পন্ন`;
        }

        if (literatureFill) {
            literatureFill.style.width = `${literatureProgress}%`;
            literatureFill.parentElement.nextElementSibling.textContent = `${literatureProgress}% সম্পন্ন`;
        }
    },

    // Calculate category progress
    calculateCategoryProgress(progress, start, end) {
        let totalItems = 0;
        let completedItems = 0;

        for (let i = start; i <= end; i++) {
            totalItems++;
            if (progress[i] && progress[i].completed) {
                completedItems++;
            }
        }

        return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    },

    // Update recent activity
    updateRecentActivity() {
        const activityList = document.getElementById('recent-activity');
        if (!activityList) return;

        const history = Storage.getQuizHistory();
        
        if (history.length === 0) {
            activityList.innerHTML = `
                <div class="activity-empty">
                    <i class="fas fa-history"></i>
                    <p>আপনি এখনো কোনো কুইজ দেননি। শুরু করতে একটি অধ্যায় নির্বাচন করুন।</p>
                </div>
            `;
            return;
        }

        // Show last 5 activities
        const recentHistory = history.slice(-5).reverse();
        activityList.innerHTML = recentHistory.map(item => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas fa-${item.score >= 50 ? 'check-circle' : 'times-circle'}"></i>
                </div>
                <div class="activity-details">
                    <div class="activity-title">${item.chapterName || 'কুইজ'}</div>
                    <div class="activity-meta">
                        স্কোর: ${item.score}% | 
                        সঠিক: ${item.correct} | 
                        ভুল: ${item.wrong} |
                        ${this.formatDate(item.timestamp)}
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Format date
    formatDate(isoString) {
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) {
            return `${diffMins} মিনিট আগে`;
        } else if (diffHours < 24) {
            return `${diffHours} ঘন্টা আগে`;
        } else if (diffDays < 7) {
            return `${diffDays} দিন আগে`;
        } else {
            return date.toLocaleDateString('bn-BD');
        }
    },

    // Export data
    exportData() {
        const data = Storage.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `provakar-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showNotification('ডেটা সফলভাবে এক্সপোর্ট করা হয়েছে!', 'success');
    },

    // Import data
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const success = Storage.importData(e.target.result);
            if (success) {
                this.showNotification('ডেটা সফলভাবে ইমপোর্ট করা হয়েছে!', 'success');
                setTimeout(() => location.reload(), 1000);
            } else {
                this.showNotification('ডেটা ইমপোর্ট করতে সমস্যা হয়েছে!', 'error');
            }
        };
        reader.readAsText(file);
        
        // Reset file input
        event.target.value = '';
    },

    // Reset progress
    resetProgress() {
    if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত প্রগতি মুছে দিতে চান? এই অপারেশনটি আর ফিরিয়ে আনা যাবে না।')) {
        Storage.clearAll();
        Storage.init();
        this.showNotification('সমস্ত প্রগতি রিসেট করা হয়েছে!', 'success');
        setTimeout(() => location.reload(), 1000);
    }
},

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--danger-color)' : 'var(--info-color)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Setup page transitions
    setupPageTransitions() {
        document.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Only apply to internal links
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                    e.preventDefault();
                    document.body.classList.add('page-transition-out');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            });
        });
    },

    // Hide loading screen
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => loadingScreen.remove(), 500);
            }
        }, 800);
    }
};

/* ================================================================
   SECTION: dashboard.js — Dashboard
   ================================================================ */

/* ========================================
   PROVAKAR - Dashboard Logic
   Handles progress display and statistics
   ======================================== */

const Dashboard = {
    // Initialize dashboard
    init() {
        this.loadStats();
        this.loadChapterProgress();
        this.loadQuizHistory();
        this.setupEventListeners();
    },

    // Load statistics
    loadStats() {
        const progress = Storage.getAllProgress();
        const quizHistory = Storage.getQuizHistory();

        // Count started chapters
        const started = Object.keys(progress).length;
        const completed = Object.values(progress).filter(p => p.completed).length;

        // Update stats
        const chaptersStarted = document.getElementById('chapters-started');
        const chaptersCompleted = document.getElementById('chapters-completed');
        const quizzesTaken = document.getElementById('quizzes-taken');
        const avgScore = document.getElementById('avg-score');

        if (chaptersStarted) chaptersStarted.textContent = started;
        if (chaptersCompleted) chaptersCompleted.textContent = completed;
        if (quizzesTaken) quizzesTaken.textContent = quizHistory.length;

        // Calculate average score
        if (avgScore && quizHistory.length > 0) {
            const totalScore = quizHistory.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
            const average = Math.round(totalScore / quizHistory.length);
            avgScore.textContent = `${average}%`;
        }
    },

    // Load chapter progress bars
    loadChapterProgress() {
        const container = document.getElementById('chapter-progress-bars');
        if (!container) return;

        const progress = Storage.getAllProgress();
        let html = '';

        // Show all 17 chapters
        for (let i = 1; i <= 17; i++) {
            const chapterProgress = progress[i];
            const percent = chapterProgress ? (chapterProgress.percentage || 0) : 0;
            const chapterData = ChaptersData[i];

            if (chapterData) {
                html += `
                    <div class="chapter-progress-item">
                        <div class="chapter-progress-name">অধ্যায় ${i}</div>
                        <div class="chapter-progress-bar">
                            <div class="chapter-progress-fill" style="width: ${percent}%;"></div>
                        </div>
                        <div class="chapter-progress-percent">${percent}%</div>
                    </div>
                `;
            }
        }

        if (html === '') {
            html = `
                <div class="empty-state">
                    <i class="fas fa-chart-line"></i>
                    <p>আপনি এখনো কোনো অধ্যায় শুরু করেননি।</p>
                </div>
            `;
        }

        container.innerHTML = html;
    },

    // Load quiz history
    loadQuizHistory() {
        const container = document.getElementById('quiz-history');
        if (!container) return;

        const history = Storage.getQuizHistory();

        if (history.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-history"></i>
                    <p>আপনি এখনো কোনো কুইজ দেননি।</p>
                </div>
            `;
            return;
        }

        // Show last 10 quizzes
        const recentHistory = history.slice(-10).reverse();
        let html = '';

        recentHistory.forEach(quiz => {
            const isSuccess = quiz.score >= 50;
            html += `
                <div class="quiz-history-item">
                    <div class="quiz-history-icon ${isSuccess ? 'success' : 'fail'}">
                        <i class="fas fa-${isSuccess ? 'check' : 'times'}"></i>
                    </div>
                    <div class="quiz-history-info">
                        <div class="quiz-history-title">${quiz.chapterName || 'কুইজ'}</div>
                        <div class="quiz-history-meta">
                            সঠিক: ${quiz.correct}/${quiz.total} | 
                            ${this.formatDate(quiz.timestamp)}
                        </div>
                    </div>
                    <div class="quiz-history-score">${quiz.score}%</div>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    // Format date
    formatDate(isoString) {
        if (!isoString) return '';
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) {
            return `${diffMins} মিনিট আগে`;
        } else if (diffHours < 24) {
            return `${diffHours} ঘন্টা আগে`;
        } else if (diffDays < 7) {
            return `${diffDays} দিন আগে`;
        } else {
            return date.toLocaleDateString('bn-BD');
        }
    },

    // Setup event listeners
    setupEventListeners() {
        const resetBtn = document.getElementById('reset-all-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত প্রগতি মুছে দিতে চান?')) {
                    Storage.clearAll();
                    Storage.init();
                    App.showNotification('সমস্ত প্রগতি রিসেট করা হয়েছে!', 'success');
                    setTimeout(() => location.reload(), 1000);
                }
            });
        }
    }
};

/* ================================================================
   SECTION: chapter-view.js — Chapter View
   ================================================================ */

/* ========================================
   PROVAKAR - Chapter View Logic
   Handles displaying chapter content and quiz
   ======================================== */

const ChapterView = {
    currentChapter: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    quizMode: 'study', // 'study', 'practice', 'exam'
    quizStarted: false,

    // Initialize chapter view
    init() {
        // Get chapter ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const chapterId = parseInt(urlParams.get('id'));

        if (!chapterId || !ChaptersData[chapterId]) {
            this.showError('অধ্যায়টি পাওয়া যায়নি।');
            return;
        }

        this.currentChapter = chapterId;
        this.loadChapter(chapterId);
        this.setupEventListeners();
        this.updateProgress();
    },

    // Load chapter content
    loadChapter(chapterId) {
        const chapter = ChaptersData[chapterId];
        
        // Update page title
        document.title = `${chapter.title} - PROVAKAR`;
        
        // Update breadcrumb
        const breadcrumbChapter = document.getElementById('breadcrumb-chapter');
        if (breadcrumbChapter) {
            breadcrumbChapter.textContent = `অধ্যায় ${chapter.id}`;
        }

        // Update chapter title
        const chapterTitle = document.getElementById('chapter-title');
        if (chapterTitle) {
            chapterTitle.textContent = `অধ্যায় ${chapter.id}: ${chapter.title}`;
        }

        // Update English title
        const chapterEnglish = document.getElementById('chapter-english');
        if (chapterEnglish) {
            chapterEnglish.textContent = chapter.englishTitle;
        }

        // Update quiz link
        const startQuizBtn = document.getElementById('start-quiz-btn');
        if (startQuizBtn) {
            startQuizBtn.href = `quiz.html?chapter=${chapter.id}`;
        }

        // Load content
        const contentArea = document.getElementById('chapter-content');
        if (contentArea && chapter.content) {
            contentArea.innerHTML = chapter.content;
            this.generateTOC();
            this.setupScrollSpy();
        }

        // Update bookmark button
        this.updateBookmarkButton();
    },

    // Generate Table of Contents
    generateTOC() {
        const tocNav = document.getElementById('toc-nav');
        if (!tocNav) return;

        const headings = document.querySelectorAll('#chapter-content h2, #chapter-content h3');
        let tocHTML = '';

        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;
            
            const icon = heading.querySelector('i');
            const iconClass = icon ? icon.className : 'fas fa-circle';
            
            // Remove emoji and trim
            let text = heading.textContent;
            // Remove common emoji patterns
            text = text.replace(/^[\s]*[🔤🔠📌📝📚📖✍️🔗📋📌🎯💡⚠️📊📈📉📊📋📌📄📑🔍🔎]*[\s]*/g, '');
            text = text.trim();
            
            tocHTML += `
                <div class="toc-item" data-target="${id}">
                    <i class="${iconClass}"></i> ${text}
                </div>
            `;
        });

        tocNav.innerHTML = tocHTML;

        // Add click handlers to TOC items
        tocNav.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.dataset.target;
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    // Setup scroll spy for TOC
    setupScrollSpy() {
        const headings = document.querySelectorAll('#chapter-content h2, #chapter-content h3');
        const tocItems = document.querySelectorAll('.toc-item');

        if (headings.length === 0) return;

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.scrollY + 100;

            headings.forEach(heading => {
                if (heading.offsetTop <= scrollPos) {
                    current = heading.id;
                }
            });

            tocItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.target === current) {
                    item.classList.add('active');
                }
            });
        });
    },

    // Setup event listeners
    setupEventListeners() {
        // Bookmark button
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => this.toggleBookmark());
        }

        // Print button
        const printBtn = document.getElementById('print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => window.print());
        }

        // TOC toggle (mobile)
        const tocToggle = document.getElementById('toc-toggle');
        const tocNav = document.getElementById('toc-nav');
        if (tocToggle && tocNav) {
            tocToggle.addEventListener('click', () => {
                tocNav.style.display = tocNav.style.display === 'none' ? 'block' : 'none';
                const icon = tocToggle.querySelector('i');
                if (tocNav.style.display === 'none') {
                    icon.className = 'fas fa-chevron-down';
                } else {
                    icon.className = 'fas fa-chevron-up';
                }
            });
        }
    },

    // Toggle bookmark
    toggleBookmark() {
        const chapterId = this.currentChapter;
        const chapter = ChaptersData[chapterId];
        
        if (Storage.isBookmarked('chapter', chapterId)) {
            Storage.removeBookmark('chapter', chapterId);
            App.showNotification('বুকমার্ক সরানো হয়েছে।', 'success');
        } else {
            Storage.addBookmark('chapter', chapterId, `অধ্যায় ${chapterId}: ${chapter.title}`);
            App.showNotification('বুকমার্ক যোগ করা হয়েছে।', 'success');
        }

        this.updateBookmarkButton();
    },

    // Update bookmark button
    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (!bookmarkBtn) return;

        const chapterId = this.currentChapter;
        const isBookmarked = Storage.isBookmarked('chapter', chapterId);
        
        const icon = bookmarkBtn.querySelector('i');
        if (isBookmarked) {
            icon.className = 'fas fa-bookmark';
            bookmarkBtn.title = 'বুকমার্ক সরান';
        } else {
            icon.className = 'far fa-bookmark';
            bookmarkBtn.title = 'বুকমার্ক করুন';
        }
    },

    // Update progress
    updateProgress() {
        const chapterId = this.currentChapter;
        const progress = Storage.getProgress(chapterId);
        
        if (progress) {
            const percent = progress.percentage || 0;
            const progressFill = document.getElementById('chapter-progress-fill');
            const progressPercent = document.getElementById('progress-percent');
            
            if (progressFill) {
                progressFill.style.width = `${percent}%`;
            }
            if (progressPercent) {
                progressPercent.textContent = `${percent}%`;
            }
        }
    },

    // Show error
    showError(message) {
        const contentArea = document.getElementById('chapter-content');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
                    <h2>${message}</h2>
                    <a href="chapters.html" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="fas fa-arrow-left"></i> অধ্যায়সমূহে ফিরে যান
                    </a>
                </div>
            `;
        }
    }
};

/* ================================================================
   SECTION: quiz.js — Quiz
   ================================================================ */

/* ========================================
   PROVAKAR - Quiz Logic
   Handles all quiz modes and functionality
   ======================================== */

const Quiz = {
    currentChapter: null,
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    correctCount: 0,
    wrongCount: 0,
    skippedCount: 0,
    startTime: null,
    timerInterval: null,
    currentMode: 'study',

    // Initialize quiz
    init() {
        // Get chapter ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const chapterId = parseInt(urlParams.get('chapter'));

        if (!chapterId || !ChaptersData[chapterId]) {
            this.showError('অধ্যায়টি পাওয়া যায়নি।');
            return;
        }

        this.currentChapter = chapterId;
        this.questions = ChaptersData[chapterId].questions || [];
        
        if (this.questions.length === 0) {
            this.showNoQuestions();
            return;
        }

        this.setupQuiz();
        this.setupEventListeners();
        this.loadSettings();
    },

    // Setup quiz based on mode
    setupQuiz() {
        const chapter = ChaptersData[this.currentChapter];
        
        // Update title
        const quizTitle = document.getElementById('quiz-title');
        const quizSubtitle = document.getElementById('quiz-subtitle');
        if (quizTitle) {
            quizTitle.textContent = `অধ্যায় ${this.currentChapter}: ${chapter.title} - MCQ কুইজ`;
        }
        if (quizSubtitle) {
            quizSubtitle.textContent = `${this.questions.length}টি প্রশ্ন`;
        }

        // Update total questions
        const totalQuestions = document.getElementById('total-questions');
        const totalQNum = document.getElementById('total-q-num');
        if (totalQuestions) totalQuestions.textContent = this.questions.length;
        if (totalQNum) totalQNum.textContent = this.questions.length;

        // Initialize user answers
        this.userAnswers = new Array(this.questions.length).fill(null);
    },

    // Setup event listeners
    setupEventListeners() {
        // Mode buttons
        const modeBtns = document.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                this.switchMode(mode);
            });
        });

        // Navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevQuestion());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitQuiz());
        }

        // Result modal buttons
        const reviewBtn = document.getElementById('review-btn');
        const retryBtn = document.getElementById('retry-btn');
        const nextChapterBtn = document.getElementById('next-chapter-btn');
        
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => this.reviewAnswers());
        }
        if (retryBtn) {
            retryBtn.addEventListener('click', () => this.retryQuiz());
        }
        if (nextChapterBtn) {
            nextChapterBtn.addEventListener('click', () => this.goToNextChapter());
        }
    },

    // Load settings
    loadSettings() {
        const mode = Storage.get(Storage.keys.QUIZ_MODE) || 'study';
        this.switchMode(mode);
    },

    // Switch quiz mode
    switchMode(mode) {
        this.currentMode = mode;
        
        // Update active button
        const modeBtns = document.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Show/hide appropriate content
        const studyMode = document.getElementById('study-mode');
        const activeMode = document.getElementById('active-mode');
        const timerItem = document.getElementById('timer-item');

        if (mode === 'study') {
            studyMode.style.display = 'block';
            activeMode.style.display = 'none';
            timerItem.style.display = 'none';
            this.renderStudyMode();
        } else {
            studyMode.style.display = 'none';
            activeMode.style.display = 'block';
            if (mode === 'exam') {
                timerItem.style.display = 'flex';
                this.startTimer();
            } else {
                timerItem.style.display = 'none';
            }
            this.renderQuestion(0);
        }

        Storage.set(Storage.keys.QUIZ_MODE, mode);
    },

    // Render study mode (all questions visible)
    renderStudyMode() {
        const container = document.getElementById('study-questions');
        if (!container) return;

        let html = '';
        this.questions.forEach((q, index) => {
            const options = q.options.map((opt, optIndex) => {
                const isCorrect = optIndex === q.correct;
                return `
                    <li class="study-option ${isCorrect ? 'correct' : ''}">
                        <div class="option-label">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${opt}</div>
                        ${isCorrect ? '<i class="fas fa-check" style="color: var(--success-color);"></i>' : ''}
                    </li>
                `;
            }).join('');

            html += `
                <div class="study-question-card">
                    <div class="study-question-number">প্রশ্ন ${index + 1}</div>
                    <div class="study-question-text">${q.question}</div>
                    <ul class="study-options">${options}</ul>
                    <div class="study-explanation">
                        <h4><i class="fas fa-info-circle"></i> ব্যাখ্যা</h4>
                        <p>${q.explanation || 'ব্যাখ্যা পাওয়া যায়নি।'}</p>
                        ${q.formula ? `<p><strong>সূত্র:</strong> ${q.formula}</p>` : ''}
                    </div>
                    ${q.trick ? `
                        <div class="study-trick">
                            <strong><i class="fas fa-lightbulb"></i> ট্রিক:</strong>
                            <p>${q.trick}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        container.innerHTML = html;
    },

    // Render single question (practice/exam mode)
    renderQuestion(index) {
        if (index < 0 || index >= this.questions.length) return;
        
        this.currentIndex = index;
        const question = this.questions[index];
        
        // Update question number
        const currentQNum = document.getElementById('current-q-num');
        if (currentQNum) currentQNum.textContent = index + 1;

        // Update question text
        const questionText = document.getElementById('question-text');
        if (questionText) questionText.textContent = question.question;

        // Update options
        const optionsContainer = document.getElementById('question-options');
        if (optionsContainer) {
            const optionsHtml = question.options.map((opt, optIndex) => {
                const isSelected = this.userAnswers[index] === optIndex;
                return `
                    <div class="quiz-option ${isSelected ? 'selected' : ''}" data-index="${optIndex}">
                        <div class="option-label">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            }).join('');
            optionsContainer.innerHTML = optionsHtml;

            // Add click handlers to options
            optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', () => {
                    this.selectOption(parseInt(option.dataset.index));
                });
            });
        }

        // Hide feedback (will show in practice mode after selection)
        const feedback = document.getElementById('question-feedback');
        if (feedback) feedback.style.display = 'none';

        // Update navigation buttons
        this.updateNavigation();
    },

    // Select option
    selectOption(optionIndex) {
        if (this.currentMode === 'study') return;

        const question = this.questions[this.currentIndex];
        this.userAnswers[this.currentIndex] = optionIndex;

        // Update UI
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            opt.classList.remove('selected');
            if (idx === optionIndex) {
                opt.classList.add('selected');
            }
        });

        // In practice mode, show feedback immediately
        if (this.currentMode === 'practice') {
            this.showFeedback(optionIndex);
        }

        // Update counts
        this.updateCounts();
    },

    // Show feedback (practice mode)
    showFeedback(selectedIndex) {
        const question = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === question.correct;
        
        const feedback = document.getElementById('question-feedback');
        if (!feedback) return;

        feedback.style.display = 'block';
        feedback.innerHTML = `
            <div class="feedback-header ${isCorrect ? 'correct' : 'wrong'}">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                ${isCorrect ? 'সঠিক উত্তর!' : 'ভুল উত্তর!'}
            </div>
            <div class="feedback-explanation">
                <strong>সঠিক উত্তর:</strong> ${question.options[question.correct]}
                <p>${question.explanation || ''}</p>
            </div>
            ${question.trick ? `
                <div class="feedback-trick">
                    <strong><i class="fas fa-lightbulb"></i> ট্রিক:</strong>
                    <p>${question.trick}</p>
                </div>
            ` : ''}
        `;

        // Show correct/wrong in options
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                opt.classList.add('wrong');
            }
        });
    },

    // Update navigation buttons
    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        if (prevBtn) prevBtn.disabled = this.currentIndex === 0;

        if (this.currentIndex === this.questions.length - 1) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'inline-flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'inline-flex';
            if (submitBtn) submitBtn.style.display = 'none';
        }
    },

    // Previous question
    prevQuestion() {
        if (this.currentIndex > 0) {
            this.renderQuestion(this.currentIndex - 1);
        }
    },

    // Next question
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.renderQuestion(this.currentIndex + 1);
        }
    },

    // Start timer
    startTimer() {
        this.startTime = Date.now();
        
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            
            const timer = document.getElementById('timer');
            if (timer) {
                timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    },

    // Stop timer
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    // Update counts
    updateCounts() {
        let correct = 0, wrong = 0, skipped = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer === null) {
                skipped++;
            } else if (answer === this.questions[index].correct) {
                correct++;
            } else {
                wrong++;
            }
        });

        const correctCount = document.getElementById('correct-count');
        const wrongCount = document.getElementById('wrong-count');
        
        if (correctCount) correctCount.textContent = correct;
        if (wrongCount) wrongCount.textContent = wrong;

        this.correctCount = correct;
        this.wrongCount = wrong;
        this.skippedCount = skipped;
    },

    // Submit quiz
    submitQuiz() {
        // Stop timer
        this.stopTimer();

        // Calculate results
        this.updateCounts();
        const total = this.questions.length;
        const percentage = Math.round((this.correctCount / total) * 100);
        
        // Show result modal
        this.showResult(percentage);
    },

    // Show result
    showResult(percentage) {
        const modal = document.getElementById('result-modal');
        if (!modal) return;

        // Update result UI
        const resultPercentage = document.getElementById('result-percentage');
        const resultFill = document.getElementById('result-fill');
        const resultCorrect = document.getElementById('result-correct');
        const resultWrong = document.getElementById('result-wrong');
        const resultTime = document.getElementById('result-time');

        if (resultPercentage) resultPercentage.textContent = `${percentage}%`;
        
        if (resultFill) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (percentage / 100) * circumference;
            resultFill.style.strokeDashoffset = offset;
        }

        if (resultCorrect) resultCorrect.textContent = this.correctCount;
        if (resultWrong) resultWrong.textContent = this.wrongCount;

        // Calculate time
        if (this.startTime) {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            if (resultTime) {
                resultTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }

        // Save result
        Storage.addQuizResult({
            chapterId: this.currentChapter,
            chapterName: `অধ্যায় ${this.currentChapter}`,
            score: percentage,
            correct: this.correctCount,
            wrong: this.wrongCount,
            skipped: this.skippedCount,
            total: this.questions.length
        });

        // Update progress
        Storage.updateProgress(this.currentChapter, {
            completed: true,
            percentage: percentage,
            lastScore: percentage
        });

        // Show modal
        modal.classList.add('active');
    },

    // Review answers
    reviewAnswers() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        // Switch to study mode to review
        this.switchMode('study');
    },

    // Retry quiz
    retryQuiz() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        // Reset answers
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.correctCount = 0;
        this.wrongCount = 0;
        this.skippedCount = 0;

        // Reset UI
        const correctCount = document.getElementById('correct-count');
        const wrongCount = document.getElementById('wrong-count');
        if (correctCount) correctCount.textContent = '0';
        if (wrongCount) wrongCount.textContent = '0';

        // Restart based on current mode
        if (this.currentMode === 'exam') {
            this.startTimer();
        }
        this.renderQuestion(0);
    },

    // Go to next chapter
    goToNextChapter() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        const nextChapter = this.currentChapter + 1;
        if (ChaptersData[nextChapter]) {
            window.location.href = `quiz.html?chapter=${nextChapter}`;
        } else {
            window.location.href = 'chapters.html';
        }
    },

    // Show error
    showError(message) {
        const container = document.querySelector('.quiz-content-section .container');
        if (container) {
            container.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
                    <h2>${message}</h2>
                    <a href="chapters.html" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="fas fa-arrow-left"></i> অধ্যায়সমূহে ফিরে যান
                    </a>
                </div>
            `;
        }
    },

    // Show no questions message
    showNoQuestions() {
        const container = document.querySelector('.quiz-content-section .container');
        if (container) {
            container.innerHTML = `
                <div class="no-questions-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-question-circle" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h2>এই অধ্যায়ের জন্য এখনো কোনো MCQ যোগ করা হয়নি।</h2>
                    <p style="margin-top: 1rem; color: var(--text-muted);">শীঘ্রই প্রশ্ন যোগ করা হবে।</p>
                    <a href="chapters.html" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="fas fa-arrow-left"></i> অধ্যায়সমূহে ফিরে যান
                    </a>
                </div>
            `;
        }
    }
};

/* ================================================================
   SECTION: search.js — Search
   ================================================================ */

/* ========================================
   PROVAKAR - Search Functionality
   ======================================== */

const Search = {
    // Search data - chapters and topics
    searchData: [
        // Chapter 1
        { title: 'অধ্যায় ১: ধ্বনি ও বর্ণ', type: 'chapter', id: 1, keywords: ['ধ্বনি', 'বর্ণ', 'স্বরধ্বনি', 'ব্যঞ্জনধ্বনি', 'উচ্চারণ', 'স্থান', 'অল্পপ্রাণ', 'মহাপ্রাণ', 'ঘোষ', 'অঘোষ', 'ধ্বনি পরিবর্তন'] },
        { title: 'ধ্বনি কী?', type: 'topic', chapter: 1, keywords: ['ধ্বনি', 'সংজ্ঞা'] },
        { title: 'বর্ণ কী?', type: 'topic', chapter: 1, keywords: ['বর্ণ', 'সংজ্ঞা'] },
        { title: 'ধ্বনি ও বর্ণের পার্থক্য', type: 'topic', chapter: 1, keywords: ['পার্থক্য', 'ধ্বনি', 'বর্ণ'] },
        { title: 'স্বরধ্বনি', type: 'topic', chapter: 1, keywords: ['স্বরধ্বনি', 'হ্রস্ব', 'দীর্ঘ', 'মৌলিক', 'যৌগিক'] },
        { title: 'ব্যঞ্জনধ্বনি', type: 'topic', chapter: 1, keywords: ['ব্যঞ্জনধ্বনি', 'স্পর্শ', 'অন্তঃস্থ', 'উষ্ম'] },
        { title: 'উচ্চারণের স্থান', type: 'topic', chapter: 1, keywords: ['উচ্চারণ', 'কণ্ঠ্য', 'তালব্য', 'মূর্ধন্য', 'দন্ত্য', 'ওষ্ঠ্য'] },
        
        // Chapter 2
        { title: 'অধ্যায় ২: শব্দ ও পদের শ্রেণিবিভাগ', type: 'chapter', id: 2, keywords: ['শব্দ', 'পদ', 'বিশেষ্য', 'বিশেষণ', 'সর্বনাম', 'ক্রিয়া', 'অব্যয়', 'বিভক্তি'] },
        { title: 'পদ কী?', type: 'topic', chapter: 2, keywords: ['পদ', 'সংজ্ঞা', 'বিভক্তি'] },
        { title: 'বিশেষ্য', type: 'topic', chapter: 2, keywords: ['বিশেষ্য', 'প্রকার', 'সংজ্ঞাবাচক', 'জাতিবাচক'] },
        { title: 'বিশেষণ', type: 'topic', chapter: 2, keywords: ['বিশেষণ', 'নাম', 'ক্রিয়া', 'বিশেষণের বিশেষণ'] },
        { title: 'সর্বনাম', type: 'topic', chapter: 2, keywords: ['সর্বনাম', 'ব্যক্তিবাচক', 'নির্দেশক', 'প্রশ্নবাচক'] },
        { title: 'ক্রিয়া', type: 'topic', chapter: 2, keywords: ['ক্রিয়া', 'সকর্মক', 'অকর্মক', 'দ্বিকর্মক'] },
        { title: 'অব্যয়', type: 'topic', chapter: 2, keywords: ['অব্যয়', 'সমুচ্চয়ী', 'অনন্বয়ী', 'অনুকার'] },
        
        // Chapter 3
        { title: 'অধ্যায় ৩: সন্ধি', type: 'chapter', id: 3, keywords: ['সন্ধি', 'স্বরসন্ধি', 'ব্যঞ্জনসন্ধি', 'বিসর্গ সন্ধি'] },
        
        // Chapter 4
        { title: 'অধ্যায় ৪: কারক ও বিভক্তি', type: 'chapter', id: 4, keywords: ['কারক', 'বিভক্তি', 'কর্তা', 'কর্ম', 'করণ', 'সম্প্রদান', 'অপাদান', 'অধিকরণ'] },
        
        // Chapter 5
        { title: 'অধ্যায় ৫: সমাস', type: 'chapter', id: 5, keywords: ['সমাস', 'বহুব্রীহি', 'কর্মধারয়', 'দ্বন্দ্ব', 'দ্বিগু', 'তৎপুরুষ', 'অব্যয়ীভাব'] },
        
        // Chapter 6
        { title: 'অধ্যায় ৬: বাক্য পরিবর্তন', type: 'chapter', id: 6, keywords: ['বাক্য', 'সরল', 'জটিল', 'যৌগিক', 'রূপান্তর'] },
        
        // Chapter 7
        { title: 'অধ্যায় ৭: বাচ্য পরিবর্তন', type: 'chapter', id: 7, keywords: ['বাচ্য', 'কর্তৃবাচ্য', 'কর্মবাচ্য', 'ভাববাচ্য'] },
        
        // Chapter 8
        { title: 'অধ্যায় ৮: কাল ও পুরুষ', type: 'chapter', id: 8, keywords: ['কাল', 'পুরুষ', 'বর্তমান', 'অতীত', 'ভবিষ্যৎ'] },
        
        // Chapter 9
        { title: 'অধ্যায় ৯: লিঙ্গ ও বচন', type: 'chapter', id: 9, keywords: ['লিঙ্গ', 'বচন', 'পুংলিঙ্গ', 'স্ত্রীলিঙ্গ', 'একবচন', 'বহুবচন'] },
        
        // Chapter 10
        { title: 'অধ্যায় ১০: বানান ও বাক্য শুদ্ধিকরণ', type: 'chapter', id: 10, keywords: ['বানান', 'শুদ্ধ', 'অশুদ্ধ', 'ণ-ত্ব', 'ষ-ত্ব'] },
        
        // Chapter 11
        { title: 'অধ্যায় ১১: বাংলা শব্দভাণ্ডার', type: 'chapter', id: 11, keywords: ['শব্দভাণ্ডার', 'তত্সম', 'তদ্ভব', 'দেশী', 'বিদেশী'] },
        
        // Chapter 12
        { title: 'অধ্যায় ১২: সমার্থ শব্দ', type: 'chapter', id: 12, keywords: ['সমার্থ', 'প্রতিশব্দ', 'synonym'] },
        
        // Chapter 13
        { title: 'অধ্যায় ১৩: বিপরীতার্থক শব্দ', type: 'chapter', id: 13, keywords: ['বিপরীতার্থক', 'বিপরীত', 'antonym'] },
        
        // Chapter 14
        { title: 'অধ্যায় ১৪: এক কথায় প্রকাশ', type: 'chapter', id: 14, keywords: ['এক কথায়', 'সংকোচন'] },
        
        // Chapter 15
        { title: 'অধ্যায় ১৫: সমোচ্চারিত ভিন্নার্থবোধক শব্দ', type: 'chapter', id: 15, keywords: ['সমোচ্চারিত', 'ভিন্নার্থবোধক', 'homonym'] },
        
        // Chapter 16
        { title: 'অধ্যায় ১৬: বাগধারা ও প্রবাদ-প্রবচন', type: 'chapter', id: 16, keywords: ['বাগধারা', 'প্রবাদ', 'প্রবচন', 'idiom', 'proverb'] },
        
        // Chapter 17
        { title: 'অধ্যায় ১৭: সাহিত্যিকদের পরিচিতি ও বোধপরীক্ষণ', type: 'chapter', id: 17, keywords: ['সাহিত্যিক', 'ছদ্মনাম', 'বোধপরীক্ষণ', 'passage'] }
    ],

    // Initialize search
    init() {
        const searchInput = document.getElementById('global-search');
        const searchResults = document.getElementById('search-results');

        if (searchInput && searchResults) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    searchResults.classList.add('active');
                }
            });

            // Close search results on outside click
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.classList.remove('active');
                }
            });
        }
    },

    // Handle search input
    handleSearch(query) {
        const searchResults = document.getElementById('search-results');
        
        if (!query.trim()) {
            searchResults.classList.remove('active');
            return;
        }

        const results = this.search(query);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">কোনো ফলাফল পাওয়া যায়নি</div>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="Search.navigateTo('${result.type}', ${result.chapter || result.id})">
                    <div class="result-type">
                        <i class="fas fa-${result.type === 'chapter' ? 'book' : 'file-alt'}"></i>
                        ${result.type === 'chapter' ? 'অধ্যায়' : 'টপিক'}
                    </div>
                    <div class="result-title">${result.title}</div>
                </div>
            `).join('');
        }

        searchResults.classList.add('active');
    },

    // Search function
    search(query) {
        const lowerQuery = query.toLowerCase();
        const results = [];
        const seen = new Set();

        this.searchData.forEach(item => {
            // Check title match
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            
            // Check keywords match
            const keywordMatch = item.keywords.some(keyword => 
                keyword.toLowerCase().includes(lowerQuery)
            );

            if ((titleMatch || keywordMatch) && !seen.has(item.title)) {
                results.push(item);
                seen.add(item.title);
            }
        });

        return results.slice(0, 10); // Limit to 10 results
    },

    // Navigate to search result
    navigateTo(type, id) {
        if (type === 'chapter') {
            window.location.href = `chapter.html?id=${id}`;
        } else {
            window.location.href = `chapter.html?id=${id}`;
        }
        
        // Close search results
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
            searchResults.classList.remove('active');
        }
        
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.value = '';
        }
    }
};

/* ================================================================
   SECTION: settings.js — Settings
   ================================================================ */

/* ========================================
   PROVAKAR - Settings Management
   ======================================== */

const Settings = {
    // Initialize settings
    init() {
        this.loadSettings();
        this.setupEventListeners();
    },

    // Load saved settings
    loadSettings() {
        // Quiz mode
        const quizMode = Storage.get(Storage.keys.QUIZ_MODE) || 'study';
        const quizModeSelect = document.getElementById('default-quiz-mode');
        if (quizModeSelect) {
            quizModeSelect.value = quizMode;
        }

        // Timer
        const timerEnabled = Storage.get(Storage.keys.TIMER_ENABLED);
        const timerToggle = document.getElementById('timer-toggle');
        if (timerToggle) {
            timerToggle.checked = timerEnabled !== false;
        }

        // Questions per quiz
        const questionsPerQuiz = Storage.get(Storage.keys.QUESTIONS_PER_QUIZ) || '10';
        const questionsSelect = document.getElementById('questions-per-quiz');
        if (questionsSelect) {
            questionsSelect.value = questionsPerQuiz;
        }
    },

    // Setup event listeners
    setupEventListeners() {
        // Quiz mode
        const quizModeSelect = document.getElementById('default-quiz-mode');
        if (quizModeSelect) {
            quizModeSelect.addEventListener('change', (e) => {
                Storage.set(Storage.keys.QUIZ_MODE, e.target.value);
                App.showNotification('কুইজ মোড আপডেট করা হয়েছে!', 'success');
            });
        }

        // Timer toggle
        const timerToggle = document.getElementById('timer-toggle');
        if (timerToggle) {
            timerToggle.addEventListener('change', (e) => {
                Storage.set(Storage.keys.TIMER_ENABLED, e.target.checked);
                App.showNotification('টাইমার সেটিং আপডেট করা হয়েছে!', 'success');
            });
        }

        // Questions per quiz
        const questionsSelect = document.getElementById('questions-per-quiz');
        if (questionsSelect) {
            questionsSelect.addEventListener('change', (e) => {
                Storage.set(Storage.keys.QUESTIONS_PER_QUIZ, e.target.value);
                App.showNotification('প্রশ্নের সংখ্যা আপডেট করা হয়েছে!', 'success');
            });
        }
    },

    // Get setting value
    get(settingName) {
        return Storage.get(Storage.keys[settingName]);
    },

    // Set setting value
    set(settingName, value) {
        return Storage.set(Storage.keys[settingName], value);
    }
};

/* ================================================================
   Combined Initializer
   (আগের প্রতিটি ফাইলের আলাদা DOMContentLoaded এখানে একত্রিত)
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // ১. আগে Storage initialize হবে (অন্য সব মডিউল এর উপর নির্ভরশীল)
    Storage.init();

    // ২. তারপর মূল App (theme, font, event listeners ইত্যাদি)
    App.init();

    // ৩. পেজ-নির্দিষ্ট মডিউল — শুধু সংশ্লিষ্ট এলিমেন্ট থাকলে init হবে
    if (document.getElementById('chapters-started')) {
        Dashboard.init();
    }
    if (document.getElementById('chapter-content')) {
        ChapterView.init();
    }
    if (document.getElementById('quiz-title')) {
        Quiz.init();
    }

    // ৪. সব পেজে চলা মডিউল
    Search.init();
    Settings.init();
});

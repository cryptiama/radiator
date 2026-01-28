
 

/* =========================================
   4. ABOUT US - HEXAGON SIDE PANEL LOGIC
   ========================================= */
const instituteData = {
 "Petre Melikishvili": { 
        content: `
          <div style="line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 900px; margin: auto; border: 1px solid #e1e4e8; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); background-color: #fff;">
            
    <!-- HEADER SECTION: BIOGRAPHY -->
    <div style="text-align: center; border-bottom: 3px double #2c3e50; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="color: #1a2a6c; margin-bottom: 5px; font-size: 2rem; text-transform: uppercase; letter-spacing: 2px;">პეტრე მელიქიშვილი</h1>
        <p style="font-size: 1.3rem; color: #7f8c8d; font-weight: 300;">1850 — 1927</p>
    </div>

    <!-- MAIN PROFILE BOX -->
    <div style="background-color: #f4f7f9; padding: 25px; border-radius: 8px; border-left: 6px solid #1a2a6c; margin-bottom: 35px;">
        <p style="text-align: justify; font-size: 1.1rem; margin-top: 0;">
            მსოფლიო დონის მეცნიერი-ქიმიკოსი, <strong>თბილისის სახელმწიფო უნივერსიტეტის</strong> ერთ-ერთი დამფუძნებელი და მისი <strong>პირველი რექტორი</strong> (1918 წ.). 
        </p>
        <p style="text-align: justify; font-size: 1.05rem; color: #444;">
            განათლება მიიღო ოდესის უნივერსიტეტში, სადაც წლების განმავლობაში მოღვაწეობდა პროფესორად. იყო სსრკ მეცნიერებათა აკადემიის წევრ-კორესპონდენტი და ლომონოსოვის პრემიის ლაურეატი.
        </p>
    </div>

    <!-- SCIENTIFIC ACHIEVEMENTS GRID -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 35px;">
        
        <!-- ORGANIC CHEMISTRY -->
        <div style="background: #ebf5fb; padding: 20px; border-radius: 10px; border: 1px solid #aed6f1;">
            <h3 style="color: #2e86c1; margin-top: 0; border-bottom: 2px solid #aed6f1; padding-bottom: 10px; font-size: 1.1rem; text-transform: uppercase;">ორგანული ქიმია</h3>
            <strong style="display: block; margin-bottom: 10px; color: #21618c;">გლიციდმჟავების აღმოჩენა</strong>
            <ul style="font-size: 0.95rem; padding-left: 18px; color: #2c3e50;">
                <li>დაამტკიცა გლიციდმჟავების აღნაგობა და კავშირი ეთილენის ჟანგთან.</li>
                <li>შეისწავლა უჯერი მჟავები (აკრილის მჟავა) და იზომერული კროტონმჟავები.</li>
                <li>შეიტანა კორექტირება <strong>უილიამ ჰენრის წესში</strong> აირების ხსნადობის შესახებ.</li>
            </ul>
        </div>

        <!-- INORGANIC CHEMISTRY -->
        <div style="background: #fef9e7; padding: 20px; border-radius: 10px; border: 1px solid #f9e79f;">
            <h3 style="color: #d4ac0d; margin-top: 0; border-bottom: 2px solid #f9e79f; padding-bottom: 10px; font-size: 1.1rem; text-transform: uppercase;">არაორგანული ქიმია</h3>
            <strong style="display: block; margin-bottom: 10px; color: #9a7d0a;">ზეჟანგები და ზემჟავები</strong>
            <ul style="font-size: 0.95rem; padding-left: 18px; color: #2c3e50;">
                <li>მოახდინა მრავალი ელემენტის (U, Nb, Ta, W, B, Mo, Ti, V) <strong>ზემჟავების სინთეზი</strong>.</li>
                <li>პირველმა მიიღო ამონიუმის ზეჟანგი და ნატრიუმის პერბორატი.</li>
                <li style="margin-top: 10px; font-weight: bold; color: #c0392b;">მიენიჭა ლომონოსოვის სახელობის პრემია.</li>
            </ul>
        </div>
    </div>

    <!-- AGROCHEMISTRY & ANALYSIS SECTION -->
     <div style="margin-bottom: 35px; border: 1px solid #d5dbdb; border-radius: 8px; overflow: hidden;">
        <div style="background: #002f6c; padding: 15px 20px;">
            <h3 style="color: #ffffff !important; margin: 0; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 1.1rem;">
                აგროქიმია და ბუნებრივი ნაერთების ანალიზი
            </h3>
        </div>
        <div style="padding: 20px; background: #fafffa;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h4 style="color: #1e8449; margin-top: 0;">🔬 კვლევები</h4>
                    <ul style="font-size: 0.95rem; padding-left: 18px;">
                        <li><strong>მეტეორიტები:</strong> აღმოაჩინა ორგანული ნაერთები მიგეის მეტეორიტში.</li>
                        <li><strong>სოფლის მეურნეობა:</strong> ღვინის, ჩაის, ხორბლისა და ყველის დეტალური ანალიზი.</li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: #1e8449; margin-top: 0;">🌱 ნიადაგმცოდნეობა</h4>
                    <ul style="font-size: 0.95rem; padding-left: 18px;">
                        <li>ბუნებრივი სოდის წარმოქმნის ქიმიზმი.</li>
                        <li>ნიადაგის გავლენა ვაზის მდგრადობაზე ფილოქსერას მიმართ.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- LEGACY SECTION -->
    <div style="background-color: #fdf2e9; padding: 25px; border-radius: 8px; border-top: 4px solid #e67e22;">
        <h3 style="color: #a04000; margin-top: 0; font-size: 1.2rem; text-transform: uppercase;">ქართული ქიმიური სკოლის ფუძემდებელი</h3>
        <p style="text-align: justify; font-size: 1.05rem; margin-bottom: 0;">
            მეცნიერმა საფუძველი ჩაუყარა <strong>ქართულ ქიმიურ ტერმინოლოგიას</strong>. მისი თაოსნობით თსუ-ში შეიქმნა პირველი ქიმიური ლაბორატორიები და ჩამოყალიბდა არაორგანული, ორგანული და აგრონომიული ქიმიის კათედრები.
        </p>
    </div>

    <!-- FOOTER -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #95a5a6; font-size: 0.85rem;">
        <p>აკადემიური მიმოხილვა — პეტრე მელიქიშვილის ცხოვრება და მოღვაწეობა</p>
    </div>
</div>
        `
    },
 "About Us": { 
        content: `<div style="line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 900px; margin: auto; border: 1px solid #e1e4e8; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            
            <!-- HEADER SECTION -->
            <div style="text-align: center; border-bottom: 3px double #2c3e50; padding-bottom: 20px; margin-bottom: 30px;">
                <h1 style="color: #1a2a6c; margin-bottom: 5px; font-size: 1.8rem; text-transform: uppercase;">პეტრე მელიქიშვილის სახელობის ფიზიკური და ორგანული ქიმიის ინსტიტუტი</h1>
                <p style="font-size: 1.1rem; color: #7f8c8d; font-style: italic;">ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი</p>
            </div>

            <!-- HISTORICAL OVERVIEW & MISSION -->
            <div style="background-color: #f0f4f8; padding: 25px; border-radius: 8px; border-left: 6px solid #1a2a6c; margin-bottom: 35px;">
                <h2 style="color: #2c3e50; margin-top: 0; font-size: 1.3rem; text-transform: uppercase; letter-spacing: 1px;">დაარსება და მისია</h2>
                <p style="text-align: justify; font-size: 1.05rem;">
                    ინსტიტუტი დაარსდა <strong>1929 წლის 1 ოქტომბერს</strong> თბილისის სახელმწიფო უნივერსიტეტის პირველი რექტორის, <strong>პეტრე მელიქიშვილის</strong> ინიციატივით და მის სახელს ატარებს.
                </p>
                <p style="text-align: justify; font-size: 1.05rem;">
                    ინსტიტუტის მისიას წარმოადგენს საქართველოს ეკონომიკის განვითარებისათვის ქიმიური მეცნიერების მობილიზაცია, ქვეყნის ბუნებრივი რესურსების რაციონალური გამოყენების შესაძლებლობების კვლევა-ძიება და ახალი მასალების მიღების ინოვაციური ტექნოლოგიების შემუშავება.
                </p>
            </div>

            <!-- CORE RESEARCH FIELDS -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #1a2a6c; border-bottom: 1px solid #eee; padding-bottom: 10px; text-transform: uppercase; font-size: 1.1rem;">კვლევის ძირითადი სფეროები</h3>
                <p>თავისი მისიის შესასრულებლად, ინსტიტუტი ატარებს ფართომასშტაბიან კვლევებს შემდეგ დისციპლინებში:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                    <div style="background: #fff; padding: 10px 15px; border: 1px solid #d1d8e0; border-radius: 4px;">• ფიზიკური და ორგანული ქიმია</div>
                    <div style="background: #fff; padding: 10px 15px; border: 1px solid #d1d8e0; border-radius: 4px;">• მაკრომოლეკულური ნაერთები</div>
                    <div style="background: #fff; padding: 10px 15px; border: 1px solid #d1d8e0; border-radius: 4px;">• გარემოს დაცვის ქიმია</div>
                    <div style="background: #fff; padding: 10px 15px; border: 1px solid #d1d8e0; border-radius: 4px;">• ნავთობის ქიმია</div>
                    <div style="background: #fff; padding: 10px 15px; border: 1px solid #d1d8e0; border-radius: 4px;">• აგროქიმია</div>
                </div>
            </div>

            <!-- SCIENTIFIC INVESTIGATIONS & TECHNOLOGIES -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #1a2a6c; border-bottom: 1px solid #eee; padding-bottom: 10px; text-transform: uppercase; font-size: 1.1rem;">ფიზიკურ-ქიმიური პროცესები და მასალები</h3>
                <p style="text-align: justify;">კვლევითი საქმიანობა მოიცავს ისეთი რთული პროცესების შესწავლას, როგორიცაა ნარევების ქრომატოგრაფიული დაყოფა, ადსორბცია მიკროფოროვან კრისტალურ სხეულებში, დიფუზია და კატალიზი.</p>
                
                <div style="background: #fdf6e3; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #f39c12;">
                    <strong style="color: #d35400;">შემუშავებული ტექნოლოგიები და მასალები:</strong>
                    <ul style="margin-top: 10px; columns: 2; font-size: 0.95rem;">
                        <li>ადსორბენტები და კატალიზატორები</li>
                        <li>იონმიმომცვლელები</li>
                        <li>ულტრადისპერსული ფხვნილები</li>
                        <li>საშენ მასალათა დანამატები</li>
                        <li>სარესტავრაციო მასალები</li>
                        <li>ორგანომინერალური სასუქები</li>
                        <li>ეკოლოგიური სუბსტრატები</li>
                        <li>პოლიმერული კომპოზიტები</li>
                        <li>ნანოდანაფარებიანი მასალები</li>
                    </ul>
                </div>
                <p style="font-size: 0.95rem; color: #555; font-style: italic;">აღნიშნული შედეგები ინერგება სოფლის მეურნეობაში, გარემოს დაცვაში, მშენებლობასა და ნანოტექნოლოგიებში.</p>
            </div>

            <!-- SECTOR-SPECIFIC APPLICATIONS -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 35px;">
                
                <!-- AGRICULTURE & VETERINARY -->
                <div style="background: #eafaf1; padding: 20px; border-radius: 10px; border: 1px solid #2ecc71;">
                    <h4 style="color: #27ae60; margin-top: 0;">აგროქიმია</h4>
                    <ul style="font-size: 0.9rem; padding-left: 18px;">
                        <li>ახალი ტიპის პროლონგირებული სასუქები.</li>
                        <li>მიკროელემენტების შემცველი პრემიქსები.</li>
                        <li>ბიოლოგიურად აქტიური დანამატები.</li>
                        <li>სამკურნალო ვეტერინარული საშუალებები.</li>
                        <li>ექსტრაქციის ულტრაბგერითი მეთოდები.</li>
                    </ul>
                </div>

                <!-- PETROLEUM & ENERGY -->
                <div style="background: #f4f6f7; padding: 20px; border-radius: 10px; border: 1px solid #bfc9ca;">
                    <h4 style="color: #2c3e50; margin-top: 0;">ნავთობის ქიმია</h4>
                    <ul style="font-size: 0.9rem; padding-left: 18px;">
                        <li>საქართველოს ენერგეტიკული წიაღისეულის შესწავლა და პასპორტიზაცია.</li>
                        <li>ნავთობისა და ბიტუმების რანჟირება.</li>
                        <li>ნავთობ პროდუქტების მიღების ტექნოლოგიები.</li>
                        <li>ბიოდიზელის წარმოების გაუმჯობესება.</li>
                    </ul>
                </div>

            </div>

            <!-- FOOTER -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #95a5a6; font-size: 0.85rem;">
                <p>ოფიციალური მიმოხილვა - პეტრე მელიქიშვილის სახელობის ფიზიკური და ორგანული ქიმიის ინსტიტუტი</p>
            </div>
        </div>`
    },
  "Institute Statute": {
    pdf: "pdfs/statute.pdf",
    content: `
        <div style="line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333;">
            
            <!-- OFFICIAL DECREE BOX -->
            <div style="background-color: #f0f4f8; padding: 25px; border-radius: 8px; border-left: 6px solid #2c3e50; margin-bottom: 30px;">
                <p style="font-size: 0.85rem; color: #7f8c8d; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Annex №1</p>
                <h2 style="color: #2c3e50; margin-top: 0; font-size: 1.4rem;">Decree №149/2016 (December 19, 2016)</h2>
                <p style="font-size: 1.05rem; margin-bottom: 20px;">Regarding the Approval of the Statute of the <strong>Petre Melikishvili Institute of Physical and Organic Chemistry</strong>, an Independent Scientific-Research Unit of the LEPL - Ivane Javakhishvili Tbilisi State University.</p>
                <p style="font-style: italic; background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #d1d8e0;">"The Academic Council resolves to approve the Statute (Annex №1) and submit it to the Representative Council for final approval."</p>
                <div style="margin-top: 20px; border-top: 1px solid #d1d8e0; padding-top: 15px;">
                    <p><strong>Giorgi Sharvashidze</strong><br>
                    <span style="color: #7f8c8d;">Rector, Chairman of the Academic Council</span></p>
                    <p style="font-size: 0.85rem; color: #95a5a6;">Incorporating changes from Decree №19/2018 (Feb 5, 2018)</p>
                </div>
            </div>

            <!-- PREAMBLE -->
            <div style="margin-bottom: 40px;">
                <h2 style="color: #1a2a6c; border-bottom: 2px solid #1a2a6c; display: inline-block; padding-bottom: 5px; text-transform: uppercase; font-size: 1.2rem;">Preamble</h2>
                <p style="font-size: 1.05rem; text-align: justify; margin-top: 15px;">The <strong>Petre Melikishvili Institute of Physical and Organic Chemistry</strong> is the oldest scientific-research center in the field of chemistry in Georgia, <strong>founded on October 1, 1929</strong>. At the proposal of the first director of the Institute, <strong>Academician Lev Pisarzhevsky</strong>, the institute was named after the first rector of Tbilisi State University, the prominent scientist and chemist <strong>Petre Melikishvili</strong>.</p>
                <p style="text-align: justify;">Before the establishment of the Academy of Sciences in Georgia, the institute was an independent scientific-research institution; for the next 65 years, it functioned as part of the Georgian Academy of Sciences. In the process of development of the Petre Melikishvili Institute of Chemistry, several leading institutes were formed on its basis.</p>
                <div style="background: #fdf6e3; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #f39c12;">
                    <p style="margin: 0;">In 2006, based on Decree №58 of the Government of Georgia, the institute was established as a Legal Entity of Public Law. Based on Government Decree №185, in 2010, the institute was reorganized into an <strong>independent scientific-research unit</strong> of the Ivane Javakhishvili Tbilisi State University.</p>
                </div>
            </div>

            <!-- ARTICLE 1 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 1. General Provisions</h3>
                <ol style="font-size: 1rem; line-height: 1.7;">
                    <li>The Petre Melikishvili Institute of Physical and Organic Chemistry of the LEPL - Ivane Javakhishvili Tbilisi State University (hereinafter - the “University”) is an independent scientific-research structural unit of the University (hereinafter - the “Institute”), which carries out scientific-research activities and has governing bodies.</li>
                    <li>In its activities, the Institute is guided by current legislation, the University Charter, and this Statute.</li>
                    <li>The Institute has a letterhead and a seal, and a bank sub-account (sub-accounts).</li>
                    <li>The Institute may have a periodical publication (journal, newspaper, etc.).</li>
                </ol>
            </div>

            <!-- ARTICLE 2 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 2. Goals, Functions, and Subject of Activity of the Institute</h3>
                <div style="background: #f1f2f6; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                    <p style="font-size: 1.05rem; color: #1e3799; margin-top: 0;"><strong>1. Primary Goal:</strong></p>
                    <p>The goal of the Institute is to facilitate the effective conduct of scientific-research and educational processes within the University, the implementation of international standards, and the training of scientific personnel. The purpose of the Institute is to carry out fundamental and applied scientific-research, consulting, and expert activities in chemistry and chemical technologies.</p>
                </div>
                <ol start="2" style="line-height: 1.7;">
                    <li>Within the scope of its competence, the Institute is authorized to define institutional priorities and a scientific-research program, hold scientific conferences and other types of scientific events, establish scientific contacts with leading local and foreign scientific-research centers, and actively participate in international scientific research (joint scientific programs, international forums, scientific grants, scientific exchange programs, and other thematic activities).</li>
                    <li>In accordance with the rules established by law, the Institute is authorized to participate in the educational process, as well as:
                        <ul style="list-style-type: lower-alpha; padding-top: 10px; padding-left: 20px;">
                            <li>Participate in the fulfillment of undergraduate, master’s, and doctoral student theses;</li>
                            <li>Participate in the preparation and implementation of higher educational programs in accordance with the rules established by the University;</li>
                            <li>Ensure the involvement of students in scientific grant projects, local and international scientific conferences, and scientific-research activities.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <!-- ARTICLE 3 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 3. Structure of the Institute</h3>
                <p>The structure of the Institute consists of the Institute’s management bodies (the Director and the Scientific Council of the Institute) and the following scientific and non-scientific structural units:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                    <div style="background: #e8f4fd; padding: 20px; border-radius: 10px; border: 1px solid #3498db;">
                        <strong style="font-size: 1.1rem; color: #2980b9;">a) Scientific structural units are:</strong>
                        <ul style="margin-top: 10px; padding-left: 20px; font-size: 0.95rem;">
                            <li>a.a) Laboratory for the Study of Physico-Chemical Processes;</li>
                            <li>a.b) Laboratory of Organic Compounds Chemistry;</li>
                            <li>a.c) Laboratory of Macromolecular Compounds Chemistry;</li>
                            <li>a.d) Laboratory of Chemical Ecology;</li>
                            <li>a.e) Laboratory of Petroleum Chemistry;</li>
                            <li>a.f) Laboratory of Agricultural Chemistry.</li>
                        </ul>
                    </div>
                    <div style="background: #fcedf0; padding: 20px; border-radius: 10px; border: 1px solid #e74c3c;">
                        <strong style="font-size: 1.1rem; color: #c0392b;">b) Non-scientific structural unit:</strong>
                        <ul style="margin-top: 10px; padding-left: 20px; font-size: 0.95rem;">
                            <li>b.a) Department of Organizational and Engineering-Technical Support.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ARTICLE 4 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 4. Scientific Council of the Institute</h3>
                <p>The Scientific Council of the Institute is formed by the <strong>Chief Scientific Researchers</strong> of the Institute.</p>
                <div style="background: #f9f9f9; padding: 25px; border: 1px dashed #7f8c8d; border-radius: 8px;">
                    <strong>2. The Scientific Council:</strong>
                    <ul style="margin-top: 10px; line-height: 1.6; font-size: 0.95rem;">
                        <li style="margin-bottom: 8px;">a) Discusses and decides on issues of scientific management and development of the Institute. Develops the strategic development plan of the Institute and current scientific research plans, which are approved by the Director of the Institute;</li>
                        <li style="margin-bottom: 8px;">b) Hears and approves the annual reports of the heads of the structural units of the Institute and, based on them, ensures the preparation of the Institute’s annual scientific report;</li>
                        <li style="margin-bottom: 8px;">c) Submits the annual scientific report of the Institute to the relevant structural unit of the University administration;</li>
                        <li style="margin-bottom: 8px;">d) In accordance with the request of the relevant structural unit of the University administration, makes a presentation of the annual scientific report before the Academic and Representative Councils;</li>
                        <li style="margin-bottom: 8px;">e) In agreement with the Director, develops a project for changes to the structure of the Institute and submits it to the Rector of the University to ensure approval in accordance with the rules established by the University Charter;</li>
                        <li style="margin-bottom: 8px;">f) Elects a Chairman of the Scientific Council from its members for a term of 5 years;</li>
                        <li style="margin-bottom: 8px;">g) The Scientific Council is authorized to make a decision on the early termination of the authority of the Chairman of the Scientific Council. The decision is considered adopted if voted for by more than half of the full composition of the Council;</li>
                        <li style="margin-bottom: 8px;">h) Is authorized to elect prominent scientists working in Georgia or abroad as honorary members of the Institute;</li>
                        <li style="margin-bottom: 8px;">i) Selects the Director of the Institute and submits the candidate to the Academic Council of the University for approval;</li>
                        <li style="margin-bottom: 8px;">j) In the case of implementing a higher educational program, participates in the monitoring process of the performance of the research component;</li>
                        <li style="margin-bottom: 8px;">k) Performs other functions provided by legislative and subordinate acts, as well as by this Statute.</li>
                    </ul>
                </div>
                <ol start="3" style="margin-top: 20px; line-height: 1.7;">
                    <li>A meeting of the Scientific Council is authorized to make decisions if more than half of the full composition is present. A decision is considered adopted if voted for by more than half of the members on the list.</li>
                    <li>A meeting of the Scientific Council is held at least once every 2 months at the initiative of the Director, the Chairman of the Scientific Council, or at least one-third of the members of the Scientific Council. These same subjects have the authority to convene an extraordinary meeting of the Scientific Council in accordance with the established procedure.</li>
                    <li>The Scientific Council of the Institute participates in the development of a unified rule for hiring scientific personnel, additional conditions for occupying a scientific position in an independent scientific-research unit of the University, and the rule for the attestation of scientific personnel.</li>
                    <li>In accordance with current legislation, the University Charter, and this Statute, the Scientific Council of the Institute develops the rules for selecting the Director of the Institute on the basis of an open competition.</li>
                </ol>
            </div>

            <!-- ARTICLE 5 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 5. Chairman of the Scientific Council and Their Powers</h3>
                <ol style="line-height: 1.7;">
                    <li>The activities of the Scientific Council are led by the Chairman of the Scientific Council.</li>
                    <li>The Scientific Council elects the Chairman of the Scientific Council based on a vote, by a majority of the members on the list, for a term of 5 years. The Scientific Council decides whether the vote to elect the Chairman shall be conducted by an open or secret ballot based on an open vote. If the Scientific Council makes a decision to elect the Chairman by secret ballot in accordance with the rules established by law, the Scientific Council establishes the procedure for conducting the secret ballot.</li>
                </ol>
                <div style="padding: 20px; background: #fff; border: 2px solid #eee; border-radius: 8px; margin-top: 15px;">
                    <p><strong>3. The Chairman of the Scientific Council:</strong></p>
                    <ul style="list-style-type: disc; padding-left: 25px; line-height: 1.7;">
                        <li>a) Leads the meetings of the Scientific Council;</li>
                        <li>b) Signs the minutes (protocols) of the Scientific Council meetings;</li>
                        <li>c) Leads the preparation of the Institute’s annual scientific plan and report;</li>
                        <li>d) Represents the Council, within the scope of their competence, in relations with third parties.</li>
                    </ul>
                </div>
            </div>

            <!-- ARTICLE 6 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 6. Director of the Institute</h3>
                <div style="background: #f0f4f7; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
                    <ol style="line-height: 1.7; margin: 0;">
                        <li style="margin-bottom: 10px;">The scientific-organizational and administrative activities of the Institute are led by the Director of the Institute.</li>
                        <li style="margin-bottom: 10px;">The Scientific Council of the Institute selects the Director of the Institute for a term of 5 years and submits them to the Academic Council of the University for approval. In case of a justified refusal by the Academic Council to approve the candidacy, the Scientific Council of the Institute shall present the same candidate or select another candidate. In case of a repeated refusal by the Academic Council to approve the candidacy, the Rector appoints an Acting Director of the Institute. In such a case, the Scientific Council of the Institute is obliged to select a new candidate for Director no later than 6 months. An Acting Director is appointed by the Rector until a candidate for Director is approved by the Academic Council.</li>
                        <li style="margin-bottom: 10px;">The position of Director of the Institute may be held by a person who meets the requirements established for a Chief Scientific Researcher of a scientific-research unit and whose age does not exceed 65 years. If the person does not hold the position of Chief Scientific Researcher of the Institute, upon assuming the position of Director, they are also considered elected to the position of Chief Scientific Researcher. Reaching the age of 65 does not lead to the termination of the Director’s authority.</li>
                        <li style="margin-bottom: 10px;">The issue of appointing/electing or dismissing a person who has reached the age of 65 from the position of Director or Deputy Director is decided directly by the subject authorized to make the appointment/election decision for that position.</li>
                        <li style="margin-bottom: 10px;">The same person may hold the position of Director of the Institute only twice in a row.</li>
                        <li style="margin-bottom: 10px;">The Director of the Institute, as a Chief Scientific Researcher, is a member of the Scientific Council.</li>
                    </ol>
                </div>
                <p><strong>7. The Director of the Institute:</strong></p>
                <ul style="padding-left: 20px; line-height: 1.7; font-size: 0.95rem;">
                    <li>a) Ensures the effective conduct of scientific research at the Institute;</li>
                    <li>b) Submits the Institute’s strategic development plan and current scientific research plans to the relevant management bodies of the University for agreement;</li>
                    <li>c) Is responsible, within the scope of their authority, for the implementation of the decisions of the University’s management bodies;</li>
                    <li>d) Develops and submits the draft of the Institute’s annual budget and staff list to the relevant management bodies for discussion and approval;</li>
                    <li>e) Is responsible for the targeted use of the Institute’s funding;</li>
                    <li>f) Ensures organizational measures for the preparation of the scientific report;</li>
                    <li>g) Submits information regarding the work performed by them to the Scientific Council of the Institute and the Head of the University Administration no later than the end of each calendar year;</li>
                    <li>h) Is authorized, in accordance with the procedure established by law, to raise the issue of rewarding employees or applying disciplinary responsibility measures against them before the relevant management bodies of the University;</li>
                    <li>i) For the term of their own authority, submits candidates for the Deputy Director(s) and the Scientific Secretary from the Institute’s personnel to the Head of the University Administration for appointment or dismissal;</li>
                    <li>j) On the basis and within the scope of the authority granted by the Rector and/or the Head of Administration, represents the Institute in relations with third parties and concludes contracts if relevant power of attorney exists from the University;</li>
                    <li>k) Within the scope of their authority, issues individual administrative-legal acts – orders;</li>
                    <li>l) Exercises other powers provided for by this Statute and the University Charter.</li>
                </ul>
                <ol start="8" style="line-height: 1.7; margin-top: 15px;">
                    <li>In the absence of the Director, the duties of the Director shall be performed by the Deputy Director upon their instruction, which must be reported to the University Rector.</li>
                    <li>In the absence of both the Director and the Acting Director (business trip, vacation, sick leave, etc.), the temporary performance of the Director’s duties may be assigned to the head of a scientific structural unit of the Institute upon the recommendation of the Director/Acting Director, by order of the Rector.</li>
                    <li>The basis for early termination of the authority of the Director/Deputy Director is:
                        <ul style="list-style-type: lower-alpha; padding-left: 20px; margin-top: 10px;">
                            <li>Personal application;</li>
                            <li>Entry into force of a guilty verdict rendered by a court against them;</li>
                            <li>Recognition by a court as having limited capacity or being a recipient of support, unless otherwise determined by the court decision;</li>
                            <li>A justified submission by the Scientific Council of the Institute;</li>
                            <li>Death;</li>
                            <li>Other cases provided for by the University Charter, this Statute, and Georgian legislation.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <!-- ARTICLE 7 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 7. Head of a Scientific and Non-Scientific Structural Unit of the Institute</h3>
                <ol style="line-height: 1.7;">
                    <li>The head of a scientific structural unit of the Institute is elected by the Scientific Council on the basis of an open competition and is approved by the Director.</li>
                    <li>A person who meets the requirements established for a Chief or Senior Scientific Researcher of this Institute may be elected as the head of a scientific structural unit. If the person does not hold the position of Chief or Senior Scientific Researcher of the Institute, upon election to the position of head of a scientific structural unit, they are also considered elected to the relevant scientific position.</li>
                    <li>The head of a non-scientific structural unit of the Institute is approved by the Head of the University Administration upon the recommendation of the Institute Director.</li>
                </ol>
                <div style="border-left: 4px solid #3498db; background: #f9f9f9; padding: 20px; margin-top: 15px; border-radius: 0 8px 8px 0;">
                    <p><strong>4. A scientific/non-scientific structural unit is managed by a head who:</strong></p>
                    <ul style="list-style-type: lower-alpha; padding-left: 20px; line-height: 1.7;">
                        <li>Develops work plans for activities to be implemented in the structural unit and submits them to the Scientific Council for approval;</li>
                        <li>Develops the draft of job descriptions for the employees of the structural unit and submits them to the Director for approval;</li>
                        <li>Within the scope of the structural unit’s competence, organizes the development of scientific-research grant projects;</li>
                        <li>Discusses and develops recommendations on the rules for conducting competitions for scientific positions in the structural unit and additional qualification conditions;</li>
                        <li>Raises the issue of disciplinary responsibility, dismissal, or reward of a person holding a position in the structural unit before the Director;</li>
                        <li>Develops and submits the funding project of the structural unit to the Director;</li>
                        <li>Is responsible for the fulfillment of the functions and tasks of the structural unit.</li>
                    </ul>
                </div>
            </div>

            <!-- ARTICLE 8 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 8. Personnel of the Institute</h3>
                <p>The personnel of the Institute consists of administrative, scientific, and other personnel.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;">
                    <thead>
                        <tr style="background: #2c3e50; color: #fff;">
                            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Category</th>
                            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Positions Included</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Administrative</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">Director and Deputy Director</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Scientific</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">Scientists (Chief, Senior, and Scientific Researchers) and Postdoctoral fellows</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Other</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">Specialists, Laboratory Assistants, Engineers, and other positions provided for by the staff list</td>
                        </tr>
                    </tbody>
                </table>
                <ol start="6" style="line-height: 1.7;">
                    <li>The Director/Deputy Director of the Institute may not hold the position of head of a structural unit of the Institute.</li>
                    <li>The rights and duties of the Institute personnel, as well as the terms of their labor relations, are determined by current legislation, the University Charter, this Statute, and other legal acts of the University.</li>
                </ol>
            </div>

            <!-- ARTICLE 9 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 9. Rights and Duties of the Scientific Personnel</h3>
                <div style="display: flex; gap: 20px; margin-top: 20px;">
                    <div style="flex: 1; background: #e7f3e7; padding: 20px; border-radius: 8px; border: 1px solid #c3e6cb;">
                        <strong style="color: #27ae60; font-size: 1.1rem; display: block; margin-bottom: 10px;">1. Rights:</strong>
                        <ul style="font-size: 0.9rem; line-height: 1.6; padding-left: 20px;">
                            <li>Independently carry out scientific research and publish research results without restriction, except in cases where their restriction is provided for by a contract or they contain state secrets;</li>
                            <li>Determine the content of scientific research, research methods, and means within the framework of the strategic development plan and current scientific research plan of the Institute;</li>
                            <li>Participate in competitions announced for the purpose of obtaining grant funding, receive funding, use individual grant funding, and also receive remuneration from revenues received by the Institute as a result of other activities permitted by law;</li>
                            <li>Use the library and other property of the University/Institute;</li>
                            <li>Exercise other powers granted to them by the legislation of Georgia and this Statute.</li>
                        </ul>
                    </div>
                    <div style="flex: 1; background: #fdf2f2; padding: 20px; border-radius: 8px; border: 1px solid #f5c6cb;">
                        <strong style="color: #c0392b; font-size: 1.1rem; display: block; margin-bottom: 10px;">2. Duties:</strong>
                        <ul style="font-size: 0.9rem; line-height: 1.6; padding-left: 20px;">
                            <li>Comply with the requirements established by the Institute Statute and the University internal regulations;</li>
                            <li>Fulfill obligations assumed under the labor contract;</li>
                            <li>Take care of the property of the University/Institute;</li>
                            <li>Annually submit a report of the work performed to the head of the structural unit;</li>
                            <li>Comply with the decisions of the Scientific Council of the Institute;</li>
                            <li>Consider the interests of the Institute and regularly participate in ongoing events when carrying out activities provided for by this Statute;</li>
                            <li>Protect the reputation of the Institute and facilitate the realization of its goals.</li>
                        </ul>
                    </div>
                </div>
                <p style="margin-top: 15px; font-size: 0.95rem;">3. The basis for early termination of the labor contract of scientific personnel is the cases provided for by current legislation and legal acts of the University.</p>
            </div>

            <!-- ARTICLE 10 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 10. Rules for Occupying a Scientific Position</h3>
                <p style="font-weight: bold; color: #d35400; font-size: 1.1rem;">All positions are occupied based on OPEN COMPETITION.</p>
                <ol style="line-height: 1.7;">
                    <li>A scientific position can only be occupied on the basis of an open competition, which must be conducted in accordance with the principles of transparency, equality, and fair competition.</li>
                    <li>For the term defined by the University Charter, the position of <strong>Chief Scientific Researcher</strong> can be occupied by a person who has a Doctoral degree or an equivalent academic degree, at least 6 years of experience in scientific-research activities, and meets the additional conditions defined by the University Charter.</li>
                    <li>The position of <strong>Chief Scientific Researcher for an indefinite term</strong> can be occupied by a person who has a Doctoral degree or an equivalent academic degree, at least 6 years of experience in scientific-research activities, meets the additional conditions defined by the University Charter, and has exceptional scientific achievements (scientific publications in leading local and international journals and other publications, participation in national and international scientific-research projects, etc.).</li>
                    <li>The position of <strong>Senior Scientific Researcher</strong> can be occupied by a person who has a Doctoral degree or an equivalent academic degree. A person occupies the position of Senior Scientific Researcher for a term of 7 years.</li>
                    <li>The position of <strong>Scientific Researcher</strong> can be occupied by a person who has a Master’s degree or an equivalent academic degree. A person occupies the position of Scientific Researcher for a term of 4 years.</li>
                    <li>A person who has a Doctoral academic degree may be elected as a <strong>postdoctoral fellow</strong> in accordance with the rules established by the Academic Council.</li>
                    <li>In the case of electing a person to the position of Chief Scientific Researcher for a term of more than 5 years, the Chief Scientific Researcher is subject to attestation once every 5 years in accordance with the rules defined by the University Charter and the unified rules and conditions for conducting attestation.</li>
                    <li>A person elected to the position of Chief Scientific Researcher for a term of more than 5 years, but who has less than 5 years of authority remaining after 5 years from their election, is not subject to attestation.</li>
                </ol>
            </div>

            <!-- ARTICLE 11 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 11. Property and Financial-Economic Activity of the Institute</h3>
                <ol style="line-height: 1.7;">
                    <li>The Institute utilizes the real and movable property allocated by the University for scientific activities and other activities permitted by Georgian legislation and is responsible for the care, maintenance, and effective (targeted) use of this property.</li>
                </ol>
                <p style="margin-top: 20px;"><strong>2. The sources of funding for the Institute may be:</strong></p>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                    <span style="background: #34495e; color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">a) State Budget Funds</span>
                    <span style="background: #34495e; color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">b) Contract Work Income</span>
                    <span style="background: #34495e; color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">c) Grants Received</span>
                    <span style="background: #34495e; color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">d) Donations</span>
                    <span style="background: #34495e; color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">e) Other Legal Sources</span>
                </div>
                <p style="margin-top: 20px; font-size: 0.95rem; line-height: 1.7;">3. Funds attracted through the activities of the Institute are used for the further development of the scientific-research potential of the University and the Institute and/or for the remuneration of personnel labor.</p>
            </div>

            <!-- ARTICLE 12 -->
            <div style="margin-bottom: 35px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 12. Liquidation of the Institute</h3>
                <p>The grounds for the liquidation of the Institute may be:</p>
                <ul style="color: #c0392b; font-weight: bold; line-height: 1.7;">
                    <li>1. Failure to fulfill the obligations provided for by the Institute Statute;</li>
                    <li>2. Other cases provided for by the University Charter and Georgian legislation.</li>
                </ul>
            </div>

            <!-- ARTICLE 13 -->
            <div style="margin-bottom: 40px;">
                <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Article 13. Final Provisions, Rules for Making Changes and Additions to the Institute Statute</h3>
                <ol style="line-height: 1.7;">
                    <li>Changes and additions to the Institute Statute are made in accordance with the rules established by Georgian legislation and the University Charter.</li>
                    <li>This Statute enters into force in accordance with the procedure established by law.</li>
                </ol>
            </div>

            <div style="margin-top: 60px; padding: 25px; border-top: 2px solid #eee; text-align: center; color: #999; font-size: 0.85rem; letter-spacing: 1px; background: #fafafa;">
                <p><strong>OFFICIAL STATUTE DOCUMENT</strong><br>LEPL - IVANE JAVAKHISHVILI TBILISI STATE UNIVERSITY</p>
            </div>
        </div>`
},
   "Decree": { 
    content: `
        <div style="line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333;">
            <div style="background-color: #f0f4f8; padding: 25px; border-radius: 8px; border-left: 6px solid #2c3e50;">
                <h2 style="color: #2c3e50; margin-top: 0;">Official Decree</h2>
                <p style="font-size: 1.1rem;"><strong>Decree №149/2016 (December 19, 2016)</strong></p>
                <p style="font-size: 1.05rem; margin-bottom: 20px;">Regarding the Approval of the Statute of the <strong>Petre Melikishvili Institute of Physical and Organic Chemistry</strong>, an Independent Scientific-Research Unit of the LEPL - Ivane Javakhishvili Tbilisi State University.</p>
                <p style="font-style: italic; background: #fff; padding: 15px; border-radius: 4px;">"The Academic Council resolves to approve the Statute (Annex №1) and submit it to the Representative Council for final approval."</p>
                <div style="margin-top: 20px; border-top: 1px solid #d1d8e0; padding-top: 15px;">
                    <p><strong>Giorgi Sharvashidze</strong><br>
                    <span style="color: #7f8c8d;">Rector, Chairman of the Academic Council</span></p>
                    <p style="font-size: 0.85rem; color: #95a5a6;">Incorporating changes from Decree №19/2018 (Feb 5, 2018)</p>
                </div>
            </div>
        </div>`
},
"Preamble": { 
    content: `
        <div style="line-height: 1.8; font-family: 'Helvetica Neue', Arial, sans-serif;">
            <h2 style="color: #1a2a6c; border-bottom: 2px solid #1a2a6c; display: inline-block; padding-bottom: 5px;">Preamble</h2>
            <p style="font-size: 1.1rem; text-align: justify;">The <strong>Petre Melikishvili Institute of Physical and Organic Chemistry</strong> is the oldest scientific-research center in the field of chemistry in Georgia, <strong>founded on October 1, 1929</strong>.</p>
            <p style="text-align: justify;">At the proposal of the first director, <strong>Academician Lev Pisarzhevsky</strong>, the institute was named after the first rector of Tbilisi State University, the prominent scientist and chemist <strong>Petre Melikishvili</strong>.</p>
            <div style="background: #fdf6e3; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p>Initially an independent institution, it served 65 years within the Georgian Academy of Sciences. In <strong>2006</strong> (Decree №58), it became a Legal Entity of Public Law, and in <strong>2010</strong> (Decree №185), it was reorganized into an <strong>independent scientific-research unit</strong> of the Ivane Javakhishvili Tbilisi State University.</p>
            </div>
        </div>`
},
"1 General Provisions": { 
    content: `
        <div style="line-height: 1.6; font-family: Arial, sans-serif;">
            <h3 style="color: #2c3e50; text-transform: uppercase; letter-spacing: 1px;">Article 1. General Provisions</h3>
            <ol style="font-size: 1.05rem;">
                <li style="margin-bottom: 15px;">The Petre Melikishvili Institute of Physical and Organic Chemistry of the LEPL - Ivane Javakhishvili Tbilisi State University is an <strong>independent scientific-research structural unit</strong> which carries out scientific-research activities and has governing bodies.</li>
                <li style="margin-bottom: 15px;">The Institute is guided by <strong>current legislation, the University Charter, and this Statute</strong>.</li>
                <li style="margin-bottom: 15px;">The Institute has a <strong>letterhead, a seal, and a bank sub-account</strong> (sub-accounts).</li>
                <li style="margin-bottom: 15px;">The Institute may have a <strong>periodical publication</strong> (journal, newspaper, etc.).</li>
            </ol>
        </div>`
},
"2 Goals and Activity": { 
    content: `
        <div style="line-height: 1.6; font-family: Arial, sans-serif;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 2. Goals, Functions, and Subject of Activity</h3>
            <p style="font-size: 1.1rem; color: #1e3799;"><strong>The Primary Goal:</strong> To facilitate effective scientific-research and educational processes, implement international standards, and train scientific personnel.</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="background: #f1f2f6; margin: 10px 0; padding: 15px; border-radius: 5px;"><strong>Scientific Focus:</strong> Fundamental and applied scientific-research, consulting, and expert activities in chemistry and chemical technologies.</li>
                <li style="background: #f1f2f6; margin: 10px 0; padding: 15px; border-radius: 5px;"><strong>International Engagement:</strong> Establishing contacts with foreign centers, participating in international forums, grants, and exchange programs.</li>
            </ul>
            <h4 style="margin-top: 20px;">Educational Participation:</h4>
            <ul style="list-style-type: square; padding-left: 20px;">
                <li>Support for <strong>undergraduate, master’s, and doctoral</strong> theses.</li>
                <li>Involvement of students in <strong>scientific grant projects</strong> and conferences.</li>
            </ul>
        </div>`
},
"3 Structure": { 
    content: `
        <div style="line-height: 1.6; font-family: Arial, sans-serif;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 3. Structure of the Institute</h3>
            <p>The structure consists of management bodies (Director and Scientific Council) and specialized units:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div style="background: #e8f4fd; padding: 20px; border-radius: 10px; border: 1px solid #3498db;">
                    <strong style="font-size: 1.1rem; color: #2980b9;">Scientific Units (Laboratories):</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Physico-Chemical Processes</li>
                        <li>Organic Compounds Chemistry</li>
                        <li>Macromolecular Compounds</li>
                        <li>Chemical Ecology</li>
                        <li>Petroleum Chemistry</li>
                        <li>Agricultural Chemistry</li>
                    </ul>
                </div>
                <div style="background: #fcedf0; padding: 20px; border-radius: 10px; border: 1px solid #e74c3c;">
                    <strong style="font-size: 1.1rem; color: #c0392b;">Non-Scientific Unit:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Department of Organizational and Engineering-Technical Support</li>
                    </ul>
                </div>
            </div>
        </div>`
},
"4 Scientific Council": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 4. Scientific Council of the Institute</h3>
            <p style="font-size: 1.1rem;">The Council is formed by the <strong>Chief Scientific Researchers</strong> of the Institute.</p>
            <div style="background: #f9f9f9; padding: 20px; border: 1px dashed #7f8c8d;">
                <strong>Key Responsibilities:</strong>
                <ul style="columns: 2; margin-top: 10px;">
                    <li>Develops strategic plans</li>
                    <li>Approves annual reports</li>
                    <li>Elects the Council Chairman</li>
                    <li>Selects the Institute Director</li>
                    <li>Appoints honorary members</li>
                    <li>Defines hiring rules</li>
                </ul>
            </div>
            <p style="margin-top: 15px;"><em>Decision Making:</em> Meetings occur at least <strong>once every 2 months</strong>. Decisions require a majority vote with more than half of the members present.</p>
        </div>`
},
"5 Chairman": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 5. Chairman of the Scientific Council</h3>
            <p>The Chairman leads the activities of the Scientific Council and is elected for a <strong>term of 5 years</strong>.</p>
            <div style="padding: 15px; background: #fff; border: 2px solid #eee; border-radius: 8px;">
                <p><strong>Powers include:</strong></p>
                <ul style="list-style-type: disc; padding-left: 25px;">
                    <li><strong>Leading</strong> Scientific Council meetings.</li>
                    <li><strong>Signing</strong> official protocols and minutes.</li>
                    <li><strong>Coordinating</strong> the preparation of the annual scientific plan.</li>
                    <li><strong>Representing</strong> the Council in relations with third parties.</li>
                </ul>
            </div>
        </div>`
},
"6 Director": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 6. Director of the Institute</h3>
            <p style="font-size: 1.2rem; color: #2c3e50;"><strong>The Executive Leader</strong></p>
            <p>The Director is selected for a <strong>5-year term</strong> (maximum two consecutive terms) and must be a Chief Scientific Researcher under the age of <strong>65</strong>.</p>
            <div style="background: #f0f4f7; padding: 20px; border-radius: 10px;">
                <strong>Main Duties:</strong>
                <ul style="margin-top: 10px;">
                    <li>Ensures effective conduct of scientific research.</li>
                    <li>Submits the <strong>annual budget</strong> and staff list.</li>
                    <li>Responsible for <strong>targeted use of funding</strong>.</li>
                    <li>Appoints the Deputy Director and Scientific Secretary.</li>
                    <li>Issues individual administrative-legal acts (orders).</li>
                </ul>
            </div>
        </div>`
},
"7 Head of Unit": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 7. Head of Structural Units</h3>
            <p><strong>Scientific Heads:</strong> Elected by the Scientific Council via open competition. Must be a Chief or Senior Scientific Researcher.</p>
            <p><strong>Non-Scientific Heads:</strong> Approved by the University Administration upon the Director's recommendation.</p>
            <div style="border-left: 4px solid #3498db; padding-left: 15px; margin-left: 10px;">
                <p>Heads are responsible for developing <strong>work plans</strong>, drafting <strong>job descriptions</strong>, organizing <strong>grant projects</strong>, and overseeing the <strong>fulfillment of unit tasks</strong>.</p>
            </div>
        </div>`
},
"8 Personnel": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 8. Personnel of the Institute</h3>
            <p>The personnel is categorized into three main groups:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background: #2c3e50; color: #fff;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Category</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Positions Included</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Administrative</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Director, Deputy Director</td>
                </tr>
                <tr style="background: #f9f9f9;">
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Scientific</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Chief, Senior, and Scientific Researchers; Postdoctoral fellows</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Other</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Specialists, Laboratory Assistants, Engineers</td>
                </tr>
            </table>
        </div>`
},
"9 Rights and Duties": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 9. Rights and Duties of Scientific Personnel</h3>
            <div style="display: flex; gap: 20px;">
                <div style="flex: 1; background: #e7f3e7; padding: 15px; border-radius: 8px;">
                    <strong style="color: #27ae60;">Rights:</strong>
                    <ul style="font-size: 0.95rem;">
                        <li>Independent research & publication.</li>
                        <li>Define research methods.</li>
                        <li>Participate in grant competitions.</li>
                        <li>Use University library/property.</li>
                    </ul>
                </div>
                <div style="flex: 1; background: #fdf2f2; padding: 15px; border-radius: 8px;">
                    <strong style="color: #c0392b;">Duties:</strong>
                    <ul style="font-size: 0.95rem;">
                        <li>Comply with Statute and internal regulations.</li>
                        <li>Fulfill labor contract obligations.</li>
                        <li>Submit annual work reports.</li>
                        <li>Protect the Institute's reputation.</li>
                    </ul>
                </div>
            </div>
        </div>`
},
"10 Occupational Rules": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 10. Rules for Occupying a Scientific Position</h3>
            <p style="font-weight: bold; color: #d35400;">All positions are occupied based on OPEN COMPETITION.</p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 10px;">🏆 <strong>Chief Scientific Researcher:</strong> Doctoral degree + 6 years experience. (Indefinite or fixed term).</li>
                <li style="margin-bottom: 10px;">🎖️ <strong>Senior Scientific Researcher:</strong> Doctoral degree. Term: 7 years.</li>
                <li style="margin-bottom: 10px;">🔬 <strong>Scientific Researcher:</strong> Master’s degree. Term: 4 years.</li>
            </ul>
            <p style="background: #eee; padding: 10px; font-size: 0.9rem;"><em>Attestation:</em> Chief researchers with terms > 5 years are subject to evaluation every 5 years.</p>
        </div>`
},
"11 Property": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 11. Property and Finance</h3>
            <p>The Institute utilizes University property and is responsible for its maintenance.</p>
            <p><strong>Funding Sources:</strong></p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <span style="background: #34495e; color: #fff; padding: 5px 15px; border-radius: 20px;">State Budget</span>
                <span style="background: #34495e; color: #fff; padding: 5px 15px; border-radius: 20px;">Contract Work</span>
                <span style="background: #34495e; color: #fff; padding: 5px 15px; border-radius: 20px;">Scientific Grants</span>
                <span style="background: #34495e; color: #fff; padding: 5px 15px; border-radius: 20px;">Donations</span>
            </div>
            <p style="margin-top: 15px;"><em>Note:</em> Funds are reinvested into research potential and personnel remuneration.</p>
        </div>`
},
"12 Liquidation": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 12. Liquidation of the Institute</h3>
            <p>Liquidation occurs under the following grounds:</p>
            <ul style="color: #c0392b; font-weight: bold;">
                <li>Failure to fulfill obligations provided by the Statute.</li>
                <li>Other cases provided by the University Charter or Georgian Law.</li>
            </ul>
        </div>`
},
"13 Final Provisions": { 
    content: `
        <div style="line-height: 1.6;">
            <h3 style="color: #2c3e50; text-transform: uppercase;">Article 13. Final Provisions</h3>
            <p>1. Changes and additions to the Statute are made in accordance with <strong>Georgian legislation and the University Charter</strong>.</p>
            <p>2. This Statute enters into force in accordance with the <strong>procedure established by law</strong>.</p>
            <div style="text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; color: #7f8c8d; font-size: 0.8rem;">
                <p><em>OFFICIAL STATUTE DOCUMENT | LEPL - IVANE JAVAKHISHVILI TBILISI STATE UNIVERSITY</em></p>
            </div>
        </div>`
}
};

document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hexagon-container');
    const overlay = document.getElementById('side-panel-overlay');
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');
    const closeBtn = document.getElementById('close-panel');
    const pdfBtn = document.getElementById('pdf-link'); // The new PDF button

    if (hexagons.length > 0 && overlay) {
        hexagons.forEach(hex => {
            hex.addEventListener('click', () => {
                const sectionName = hex.getAttribute('data-section') || hex.querySelector('.content').innerText.trim();
                const data = instituteData[sectionName];

                if (data) {
                    panelTitle.innerText = sectionName;
                    panelBody.innerHTML = data.content;
                    
                    // Handle PDF Button Visibility
                    if (data.pdf && pdfBtn) {
                        pdfBtn.href = data.pdf;
                        pdfBtn.style.display = "flex";
                    } else if (pdfBtn) {
                        pdfBtn.style.display = "none";
                    }

                    overlay.classList.add('active');
                    panelBody.scrollTop = 0;
                }
            });
        });

        const closePanel = () => overlay.classList.remove('active');
        if (closeBtn) closeBtn.addEventListener('click', closePanel);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });
        document.addEventListener('keydown', (e) => { if (e.key === "Escape") closePanel(); });
    }
});

 

/* =========================================
   4. ABOUT US - HEXAGON SIDE PANEL LOGIC
   ========================================= */
const instituteData = {
 "Petre Melikishvili": { 
        content: `
            <div style="line-height: 1.6;">
                <p><strong style="font-size: 1.2rem;">პეტრე მელიქიშვილი (1850-1927)</strong></p>
                <p>მსოფლიო დონის მეცნიერი-ქიმიკოსი, თბილისის სახელმწიფო უნივერსიტეტის ერთ-ერთი დამფუძნებელი და მისი პირველი რექტორი (1918 წ.). განათლება მიიღო ოდესის უნივერსიტეტში, სადაც წლების განმავლობაში მოღვაწეობდა პროფესორად. იყო სსრკ მეცნიერებათა აკადემიის წევრ-კორესპონდენტი და ლომონოსოვის პრემიის ლაურეატი.</p>
                
                <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">
                
                <h4>ორგანული ქიმია: გლიციდმჟავების აღმოჩენა</h4>
                <ul>
                    <li>დაამტკიცა გლიციდმჟავების აღნაგობა და მათი კავშირი ეთილენის ჟანგთან.</li>
                    <li>საფუძვლიანად შეისწავლა უჯერი მჟავები (აკრილის მჟავა) და იზომერული კროტონმჟავები.</li>
                    <li>პირველმა შეიტანა კორექტირება უილიამ ჰენრის წესში, რომელიც აირების ხსნადობას ეხება.</li>
                </ul>

                <h4>არაორგანული ქიმია: ზეჟანგები და ზემჟავები</h4>
                <ul>
                    <li>მოახდინა მრავალი ელემენტის (ურანი, ნიობიუმი, ტანტალი, ვოლფრამი, ბორი, მოლიბდენი, ტიტანი, ვანადიუმი) <strong>ზემჟავების</strong> სინთეზი.</li>
                    <li>პირველმა მიიღო <strong>ამონიუმის ზეჟანგი</strong> და <strong>ნატრიუმის პერბორატი</strong>.</li>
                    <li>ამ ნაშრომთა ციკლისთვის („ზეჟანგები და ზემჟავები“) მიენიჭა ლომონოსოვის სახელობის პრემია.</li>
                </ul>

                <h4>აგროქიმია და ბუნებრივი ნაერთების ანალიზი</h4>
                <ul>
                    <li><strong>მეტეორიტების კვლევა:</strong> დაამტკიცა, რომ მეტეორიტები იმავე ქიმიურ ელემენტებს შეიცავენ, რასაც დედამიწა. მიგეის მეტეორიტში აღმოაჩინა ორგანული ნაერთები (ნახშირწყალბადები).</li>
                    <li><strong>სასოფლო-სამეურნეო პროდუქტები:</strong> ჩაატარა ქართული ღვინის, ჩაის, ხორბლისა და ყველის დეტალური ქიმიური ანალიზი.</li>
                    <li><strong>ნიადაგმცოდნეობა:</strong> შეისწავლა ბუნებრივი სოდის წარმოქმნის ქიმიზმი და ნიადაგის გავლენა ვაზის მდგრადობაზე ფილოქსერას მიმართ.</li>
                </ul>

                <h4>ქართული ქიმიური ტერმინოლოგია</h4>
                <p>მეცნიერმა საფუძველი ჩაუყარა <strong>ქართულ ქიმიურ ტერმინოლოგიას</strong>. მისი თაოსნობით თსუ-ში შეიქმნა პირველი ქიმიური ლაბორატორიები და ჩამოყალიბდა არაორგანული, ორგანული და აგრონომიული ქიმიის კათედრები, რითაც საფუძველი ჩაეყარა ქართულ ქიმიურ სკოლას.</p>
            </div>
        `
    },
    "About Us": { 
        content: ` `
    },
  "Institute Statute": {
    pdf: "pdfs/statute.pdf",
    content: `   <div style="line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <!-- Official Decree Section -->
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ccc; margin-bottom: 30px;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">
                    Changes incorporated by Decree №19/2018 of the Academic Council, dated February 5, 2018.
                </p>
                <p><strong>Decree №149/2016 (December 19, 2016)</strong></p>
                <p>Regarding the Approval of the Statute of the Petre Melikishvili Institute of Physical and Organic Chemistry, an Independent Scientific-Research Unit of the LEPL - Ivane Javakhishvili Tbilisi State University.</p>
                <p style="font-style: italic; font-size: 0.95rem;">The Academic Council resolves to approve the Statute (Annex №1) and submit it to the Representative Council for final approval.</p>
                <p style="margin-top: 10px;"><strong>Giorgi Sharvashidze</strong><br><span style="font-size: 0.9rem;">Rector, Chairman of the Academic Council</span></p>
            </div>

<hr style="border: 0; border-top: 2px solid #eee; margin: 40px 0;">

<!-- Annex Title -->
<div style="text-align: center; margin-bottom: 40px;">
    <p style="text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px; color: #666;"><strong>Annex №1</strong></p>
    <h1 style="font-size: 1.8rem; margin-top: 0; line-height: 1.3;">Statute of the Petre Melikishvili Institute of Physical and Organic Chemistry, an Independent Scientific-Research Unit of the LEPL - Ivane Javakhishvili Tbilisi State University</h1>
</div>

<h4 style="border-bottom: 1px solid #eee; padding-bottom: 5px; color: #000; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px;">Preamble</h4>
<p style="text-align: justify;">The Petre Melikishvili Institute of Physical and Organic Chemistry is the oldest scientific-research center in the field of chemistry in Georgia, founded on October 1, 1929. At the proposal of the first director of the Institute, Academician Lev Pisarzhevsky, the institute was named after the first rector of Tbilisi State University, the prominent scientist and chemist Petre Melikishvili.</p>
<p style="text-align: justify;">Before the establishment of the Academy of Sciences in Georgia, the institute was an independent scientific-research institution; for the next 65 years, it functioned as part of the Georgian Academy of Sciences. In the process of development of the Petre Melikishvili Institute of Chemistry, several leading institutes were formed on its basis.</p>
<p style="text-align: justify;">In 2006, based on Decree №58 of the Government of Georgia, the institute was established as a Legal Entity of Public Law. Based on Government Decree №185, in 2010, the institute was reorganized into an independent scientific-research unit of the Ivane Javakhishvili Tbilisi State University.</p>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 1. General Provisions</h4>
<ol>
    <li>The Petre Melikishvili Institute of Physical and Organic Chemistry of the LEPL - Ivane Javakhishvili Tbilisi State University (hereinafter - the “University”) is an independent scientific-research structural unit of the University (hereinafter - the “Institute”), which carries out scientific-research activities and has governing bodies.</li>
    <li>In its activities, the Institute is guided by current legislation, the University Charter, and this Statute.</li>
    <li>The Institute has a letterhead and a seal, and a bank sub-account (sub-accounts).</li>
    <li>The Institute may have a periodical publication (journal, newspaper, etc.).</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 2. Goals, Functions, and Subject of Activity of the Institute</h4>
<ol>
    <li>The goal of the Institute is to facilitate the effective conduct of scientific-research and educational processes within the University, the implementation of international standards, and the training of scientific personnel. The purpose of the Institute is to carry out fundamental and applied scientific-research, consulting, and expert activities in chemistry and chemical technologies.</li>
    <li>Within the scope of its competence, the Institute is authorized to define institutional priorities and a scientific-research program, hold scientific conferences and other types of scientific events, establish scientific contacts with leading local and foreign scientific-research centers, and actively participate in international scientific research (joint scientific programs, international forums, scientific grants, scientific exchange programs, and other thematic activities).</li>
    <li>In accordance with the rules established by law, the Institute is authorized to participate in the educational process, as well as:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Participate in the fulfillment of undergraduate, master’s, and doctoral student theses;</li>
            <li>Participate in the preparation and implementation of higher educational programs in accordance with the rules established by the University;</li>
            <li>Ensure the involvement of students in scientific grant projects, local and international scientific conferences, and scientific-research activities.</li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 3. Structure of the Institute</h4>
<ol>
    <li>The structure of the Institute consists of the Institute’s management bodies (the Director and the Scientific Council of the Institute) and the following scientific and non-scientific structural units:
        <ul style="list-style-type: none; padding-top: 10px;">
            <li><strong>a) Scientific structural units are:</strong>
                <ul style="list-style-type: square; margin-left: 20px; padding-top: 5px;">
                    <li>a.a) Laboratory for the Study of Physico-Chemical Processes;</li>
                    <li>a.b) Laboratory of Organic Compounds Chemistry;</li>
                    <li>a.c) Laboratory of Macromolecular Compounds Chemistry;</li>
                    <li>a.d) Laboratory of Chemical Ecology;</li>
                    <li>a.e) Laboratory of Petroleum Chemistry;</li>
                    <li>a.f) Laboratory of Agricultural Chemistry.</li>
                </ul>
            </li>
            <li style="margin-top: 15px;"><strong>b) Non-scientific structural unit:</strong>
                <ul style="list-style-type: square; margin-left: 20px; padding-top: 5px;">
                    <li>b.a) Department of Organizational and Engineering-Technical Support.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 4. Scientific Council of the Institute</h4>
<ol>
    <li>The Scientific Council of the Institute is formed by the Chief Scientific Researchers of the Institute.</li>
    <li>The Scientific Council:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Discusses and decides on issues of scientific management and development of the Institute. Develops the strategic development plan of the Institute and current scientific research plans, which are approved by the Director of the Institute;</li>
            <li>Hears and approves the annual reports of the heads of the structural units of the Institute and, based on them, ensures the preparation of the Institute’s annual scientific report;</li>
            <li>Submits the annual scientific report of the Institute to the relevant structural unit of the University administration;</li>
            <li>In accordance with the request of the relevant structural unit of the University administration, makes a presentation of the annual scientific report before the Academic and Representative Councils;</li>
            <li>In agreement with the Director, develops a project for changes to the structure of the Institute and submits it to the Rector of the University to ensure approval in accordance with the rules established by the University Charter;</li>
            <li>Elects a Chairman of the Scientific Council from its members for a term of 5 years;</li>
            <li>The Scientific Council is authorized to make a decision on the early termination of the authority of the Chairman of the Scientific Council. The decision is considered adopted if voted for by more than half of the full composition of the Council;</li>
            <li>Is authorized to elect prominent scientists working in Georgia or abroad as honorary members of the Institute;</li>
            <li>Selects the Director of the Institute and submits the candidate to the Academic Council of the University for approval;</li>
            <li>In the case of implementing a higher educational program, participates in the monitoring process of the performance of the research component;</li>
            <li>Performs other functions provided by legislative and subordinate acts, as well as by this Statute.</li>
        </ul>
    </li>
    <li>A meeting of the Scientific Council is authorized to make decisions if more than half of the full composition is present. A decision is considered adopted if voted for by more than half of the members on the list.</li>
    <li>A meeting of the Scientific Council is held at least once every 2 months at the initiative of the Director, the Chairman of the Scientific Council, or at least one-third of the members of the Scientific Council. These same subjects have the authority to convene an extraordinary meeting of the Scientific Council in accordance with the established procedure.</li>
    <li>The Scientific Council of the Institute participates in the development of a unified rule for hiring scientific personnel, additional conditions for occupying a scientific position in an independent scientific-research unit of the University, and the rule for the attestation of scientific personnel.</li>
    <li>In accordance with current legislation, the University Charter, and this Statute, the Scientific Council of the Institute develops the rules for selecting the Director of the Institute on the basis of an open competition.</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 5. Chairman of the Scientific Council and Their Powers</h4>
<ol>
    <li>The activities of the Scientific Council are led by the Chairman of the Scientific Council.</li>
    <li>The Scientific Council elects the Chairman of the Scientific Council based on a vote, by a majority of the members on the list, for a term of 5 years. The Scientific Council decides whether the vote to elect the Chairman shall be conducted by an open or secret ballot based on an open vote. If the Scientific Council makes a decision to elect the Chairman by secret ballot in accordance with the rules established by law, the Scientific Council establishes the procedure for conducting the secret ballot.</li>
    <li>The Chairman of the Scientific Council:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Leads the meetings of the Scientific Council;</li>
            <li>Signs the minutes (protocols) of the Scientific Council meetings;</li>
            <li>Leads the preparation of the Institute’s annual scientific plan and report;</li>
            <li>Represents the Council, within the scope of their competence, in relations with third parties.</li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 6. Director of the Institute</h4>
<ol>
    <li>The scientific-organizational and administrative activities of the Institute are led by the Director of the Institute.</li>
    <li>The Scientific Council of the Institute selects the Director of the Institute for a term of 5 years and submits them to the Academic Council of the University for approval. In case of a justified refusal by the Academic Council to approve the candidacy, the Scientific Council of the Institute shall present the same candidate or select another candidate. In case of a repeated refusal by the Academic Council to approve the candidacy, the Rector appoints an Acting Director of the Institute. In such a case, the Scientific Council of the Institute is obliged to select a new candidate for Director no later than 6 months. An Acting Director is appointed by the Rector until a candidate for Director is approved by the Academic Council.</li>
    <li>The position of Director of the Institute may be held by a person who meets the requirements established for a Chief Scientific Researcher of a scientific-research unit and whose age does not exceed 65 years. If the person does not hold the position of Chief Scientific Researcher of the Institute, upon assuming the position of Director, they are also considered elected to the position of Chief Scientific Researcher. Reaching the age of 65 does not lead to the termination of the Director’s authority.</li>
    <li>The issue of appointing/electing or dismissing a person who has reached the age of 65 from the position of Director or Deputy Director is decided directly by the subject authorized to make the appointment/election decision for that position.</li>
    <li>The same person may hold the position of Director of the Institute only twice in a row.</li>
    <li>The Director of the Institute, as a Chief Scientific Researcher, is a member of the Scientific Council.</li>
    <li>The Director of the Institute:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Ensures the effective conduct of scientific research at the Institute;</li>
            <li>Submits the Institute’s strategic development plan and current scientific research plans to the relevant management bodies of the University for agreement;</li>
            <li>Is responsible, within the scope of their authority, for the implementation of the decisions of the University’s management bodies;</li>
            <li>Develops and submits the draft of the Institute’s annual budget and staff list to the relevant management bodies for discussion and approval;</li>
            <li>Is responsible for the targeted use of the Institute’s funding;</li>
            <li>Ensures organizational measures for the preparation of the scientific report;</li>
            <li>Submits information regarding the work performed by them to the Scientific Council of the Institute and the Head of the University Administration no later than the end of each calendar year;</li>
            <li>Is authorized, in accordance with the procedure established by law, to raise the issue of rewarding employees or applying disciplinary responsibility measures against them before the relevant management bodies of the University;</li>
            <li>For the term of their own authority, submits candidates for the Deputy Director(s) and the Scientific Secretary from the Institute’s personnel to the Head of the University Administration for appointment or dismissal;</li>
            <li>On the basis and within the scope of the authority granted by the Rector and/or the Head of Administration, represents the Institute in relations with third parties and concludes contracts if relevant power of attorney exists from the University;</li>
            <li>Within the scope of their authority, issues individual administrative-legal acts – orders;</li>
            <li>Exercises other powers provided for by this Statute and the University Charter.</li>
        </ul>
    </li>
    <li>In the absence of the Director, the duties of the Director shall be performed by the Deputy Director upon their instruction, which must be reported to the University Rector.</li>
    <li>In the absence of both the Director and the Acting Director (business trip, vacation, sick leave, etc.), the temporary performance of the Director’s duties may be assigned to the head of a scientific structural unit of the Institute upon the recommendation of the Director/Acting Director, by order of the Rector.</li>
    <li>The basis for early termination of the authority of the Director/Deputy Director is:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Personal application;</li>
            <li>Entry into force of a guilty verdict rendered by a court against them;</li>
            <li>Recognition by a court as having limited capacity or being a recipient of support, unless otherwise determined by the court decision;</li>
            <li>A justified submission by the Scientific Council of the Institute;</li>
            <li>Death;</li>
            <li>Other cases provided for by the University Charter, this Statute, and Georgian legislation.</li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 7. Head of a Scientific and Non-Scientific Structural Unit of the Institute</h4>
<ol>
    <li>The head of a scientific structural unit of the Institute is elected by the Scientific Council on the basis of an open competition and is approved by the Director.</li>
    <li>A person who meets the requirements established for a Chief or Senior Scientific Researcher of this Institute may be elected as the head of a scientific structural unit. If the person does not hold the position of Chief or Senior Scientific Researcher of the Institute, upon election to the position of head of a scientific structural unit, they are also considered elected to the relevant scientific position.</li>
    <li>The head of a non-scientific structural unit of the Institute is approved by the Head of the University Administration upon the recommendation of the Institute Director.</li>
    <li>A scientific/non-scientific structural unit is managed by a head who:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Develops work plans for activities to be implemented in the structural unit and submits them to the Scientific Council for approval;</li>
            <li>Develops the draft of job descriptions for the employees of the structural unit and submits them to the Director for approval;</li>
            <li>Within the scope of the structural unit’s competence, organizes the development of scientific-research grant projects;</li>
            <li>Discusses and develops recommendations on the rules for conducting competitions for scientific positions in the structural unit and additional qualification conditions;</li>
            <li>Raises the issue of disciplinary responsibility, dismissal, or reward of a person holding a position in the structural unit before the Director;</li>
            <li>Develops and submits the funding project of the structural unit to the Director;</li>
            <li>Is responsible for the fulfillment of the functions and tasks of the structural unit.</li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 8. Personnel of the Institute</h4>
<ol>
    <li>The personnel of the Institute consists of administrative, scientific, and other personnel.</li>
    <li>Administrative personnel include the Director and the Deputy Director.</li>
    <li>Scientific personnel include scientists and postdoctoral fellows.</li>
    <li>Scientists are persons holding the following scientific positions:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Chief Scientific Researcher;</li>
            <li>Senior Scientific Researcher;</li>
            <li>Scientific Researcher.</li>
        </ul>
    </li>
    <li>Other personnel of the Institute include specialists, laboratory assistants, engineers, and other positions provided for by the staff list.</li>
    <li>The Director/Deputy Director of the Institute may not hold the position of head of a structural unit of the Institute.</li>
    <li>The rights and duties of the Institute personnel, as well as the terms of their labor relations, are determined by current legislation, the University Charter, this Statute, and other legal acts of the University.</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 9. Rights and Duties of the Scientific Personnel</h4>
<ol>
    <li>Scientific personnel have the right to:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Independently carry out scientific research and publish research results without restriction, except in cases where their restriction is provided for by a contract or they contain state secrets;</li>
            <li>Determine the content of scientific research, research methods, and means within the framework of the strategic development plan and current scientific research plan of the Institute;</li>
            <li>Participate in competitions announced for the purpose of obtaining grant funding, receive funding, use individual grant funding, and also receive remuneration from revenues received by the Institute as a result of other activities permitted by law;</li>
            <li>Use the library and other property of the University/Institute;</li>
            <li>Exercise other powers granted to them by the legislation of Georgia and this Statute.</li>
        </ul>
    </li>
    <li>Scientific personnel are obliged to:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Comply with the requirements established by the Institute Statute and the University internal regulations;</li>
            <li>Fulfill obligations assumed under the labor contract;</li>
            <li>Take care of the property of the University/Institute;</li>
            <li>Annually submit a report of the work performed to the head of the structural unit;</li>
            <li>Comply with the decisions of the Scientific Council of the Institute;</li>
            <li>Consider the interests of the Institute and regularly participate in ongoing events when carrying out activities provided for by this Statute;</li>
            <li>Protect the reputation of the Institute and facilitate the realization of its goals.</li>
        </ul>
    </li>
    <li>The basis for early termination of the labor contract of scientific personnel is the cases provided for by current legislation and legal acts of the University.</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 10. Rules for Occupying a Scientific Position (№19/2018, 05.02.2018)</h4>
<ol>
    <li>A scientific position can only be occupied on the basis of an open competition, which must be conducted in accordance with the principles of transparency, equality, and fair competition.</li>
    <li>For the term defined by the University Charter, the position of Chief Scientific Researcher can be occupied by a person who has a Doctoral degree or an equivalent academic degree, at least 6 years of experience in scientific-research activities, and meets the additional conditions defined by the University Charter.</li>
    <li>The position of Chief Scientific Researcher for an indefinite term can be occupied by a person who has a Doctoral degree or an equivalent academic degree, at least 6 years of experience in scientific-research activities, meets the additional conditions defined by the University Charter, and has exceptional scientific achievements (scientific publications in leading local and international journals and other publications, participation in national and international scientific-research projects, etc.).</li>
    <li>The position of Senior Scientific Researcher can be occupied by a person who has a Doctoral degree or an equivalent academic degree. A person occupies the position of Senior Scientific Researcher for a term of 7 years.</li>
    <li>The position of Scientific Researcher can be occupied by a person who has a Master’s degree or an equivalent academic degree. A person occupies the position of Scientific Researcher for a term of 4 years.</li>
    <li>A person who has a Doctoral academic degree may be elected as a postdoctoral fellow in accordance with the rules established by the Academic Council.</li>
    <li>In the case of electing a person to the position of Chief Scientific Researcher for a term of more than 5 years, the Chief Scientific Researcher is subject to attestation once every 5 years in accordance with the rules defined by the University Charter and the unified rules and conditions for conducting attestation.</li>
    <li>A person elected to the position of Chief Scientific Researcher for a term of more than 5 years, but who has less than 5 years of authority remaining after 5 years from their election, is not subject to attestation.</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 11. Property and Financial-Economic Activity of the Institute</h4>
<ol>
    <li>The Institute utilizes the real and movable property allocated by the University for scientific activities and other activities permitted by Georgian legislation and is responsible for the care, maintenance, and effective (targeted) use of this property.</li>
    <li>The sources of funding for the Institute may be:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Funds specifically allocated from the state budget in accordance with the procedure established by the legislation of Georgia;</li>
            <li>Income received from work performed on the basis of a contract;</li>
            <li>Income received through grants;</li>
            <li>Donations;</li>
            <li>Other sources of funding permitted by the legislation of Georgia.</li>
        </ul>
    </li>
    <li>Funds attracted through the activities of the Institute are used for the further development of the scientific-research potential of the University and the Institute and/or for the remuneration of personnel labor.</li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 12. Liquidation of the Institute</h4>
<ol>
    <li>The grounds for the liquidation of the Institute may be:
        <ul style="list-style-type: lower-alpha; padding-top: 5px;">
            <li>Failure to fulfill the obligations provided for by the Institute Statute;</li>
            <li>Other cases provided for by the University Charter and Georgian legislation.</li>
        </ul>
    </li>
</ol>

<h4 style="margin-top: 35px; color: #000; font-weight: bold;">Article 13. Final Provisions, Rules for Making Changes and Additions to the Institute Statute</h4>
<ol>
    <li>Changes and additions to the Institute Statute are made in accordance with the rules established by Georgian legislation and the University Charter.</li>
    <li>This Statute enters into force in accordance with the procedure established by law.</li>
</ol>

<div style="margin-top: 60px; padding: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 0.8rem; letter-spacing: 1px;">
    <p><em>OFFICIAL STATUTE DOCUMENT | LEPL - IVANE JAVAKHISHVILI TBILISI STATE UNIVERSITY</em></p>
</div>
</div>`
},
   "Decree": { 
        content: ` `
    },
    "Preamble": { 
        content: ` `
    },
    "1 General Provisions": { 
        content: ` `
    },
    "2 Goals and Activity": { 
        content: ` `
    },
    "3 Structure": { 
        content: ` `
    },
    "4 Scientific Council": { 
        content: ` `
    },
    "5 Chairman": { 
        content: ` `
    },
    "6 Director": { 
        content: ` `
    },
    "7 Head of Unit": { 
        content: ` `
    },
    "8 Personnel": { 
        content: ` `
    },
    "9 Rights and Duties": { 
        content: ` `
    },
    "10 Occupational Rules": { 
        content: ` `
    },
    "11 Property": { 
        content: ` `
    },
    "12 Liquidation": { 
        content: ` `
    },
    "13 Final Provisions": { 
        content: ` `
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
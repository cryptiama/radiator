
 

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
    "Institute Statute123": {
        pdf: "pdfs/statute.pdf",
        content: ` `
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
    // Add other sections here following the same format
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
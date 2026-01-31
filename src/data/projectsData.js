// Complete project data with all 13 projects
export const allProjects = [
    {
        id: 'telkomsel-dashboard',
        title: {
            en: 'Telkomsel Network Dashboard',
            id: 'Dashboard Jaringan Telkomsel'
        },
        category: 'Big Data',
        featured: true,
        organization: 'Telkomsel',
        timeline: {
            en: 'Sep - Dec 2024',
            id: 'Sep - Des 2024'
        },
        images: [
            '/projects/intern/image1.png',
            '/projects/intern/image2.png',
            '/projects/intern/image3.png',
            '/projects/intern/image4.png',
        ],
        tagline: {
            en: 'Automated KPI tracking for 10k+ records, reducing reporting time by 40%',
            id: 'Pelacakan KPI otomatis untuk 10k+ catatan, mengurangi waktu pelaporan 40%'
        },
        challenge: {
            en: 'Need to consolidate 10,000+ network records to align equipment attributes with FTTH deployment milestones.',
            id: 'Perlu mengkonsolidasikan 10.000+ catatan jaringan untuk menyelaraskan atribut peralatan dengan milestone deployment FTTH.'
        },
        solution: {
            en: 'Designed interactive dashboards using Grafana to automate key KPIs like equipment health and occupancy flags.',
            id: 'Merancang dashboard interaktif menggunakan Grafana untuk mengotomatiskan KPI utama seperti kesehatan peralatan dan flag okupansi.'
        },
        impact: {
            en: 'Reduced manual Excel reporting time by 30-40%',
            id: 'Mengurangi waktu pelaporan Excel manual sebesar 30-40%'
        },
        tech: ['SQL', 'Excel', 'Grafana', 'Data Visualization'],
        links: { demo: null, github: null }
    },
    {
        id: 'spotify-ml',
        title: {
            en: 'Spotify Song Popularity Prediction',
            id: 'Prediksi Popularitas Lagu di Spotify'
        },
        category: 'ML/AI',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/spotify/image1.jpg',
            '/projects/spotify/image2.jpg'
        ],
        tagline: {
            en: 'Predicted song popularity from global data using LightGBM with 97% F1-score',
            id: 'Memprediksi popularitas lagu menggunakan LightGBM dengan F1-score 97%'
        },
        challenge: {
            en: 'Predict whether a song will become popular based on historical metadata using machine learning techniques.',
            id: 'Memprediksi apakah sebuah lagu akan menjadi populer berdasarkan metadata historis menggunakan teknik machine learning.'
        },
        solution: {
            en: 'Implemented LightGBM classifier with feature engineering on Spotify dataset. Conducted hyperparameter tuning and cross-validation.',
            id: 'Mengimplementasikan klasifikasi data menggunakan LightGBM dengan feature engineering pada dataset Spotify. Melakukan hyperparameter tuning dan cross-validation.'
        },
        impact: {
            en: 'Achieved 97% F1-score using Agile development methodology',
            id: 'Mencapai F1-score 97% menggunakan metodologi pengembangan Agile'
        },
        tech: ['Python', 'LightGBM', 'Scikit-learn', 'Agile'],
        links: { demo: null, github: '#' }
    },
    {
        id: 'coffee-analysis',
        title: {
            en: 'Coffee Consumption & Health Impact Analysis',
            id: 'Analisis Pola Konsumsi Kopi & Dampak Kesehatan'
        },
        category: 'Big Data',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/coffee/coffee1.jpg',
            '/projects/coffee/5v.jpg',
            '/projects/coffee/tools.jpg',
            '/projects/coffee/etl.jpg',
            '/projects/coffee/eda.jpg',
            '/projects/coffee/ml.jpg'
        ],
        tagline: {
            en: 'Big Data analytics on coffee consumption patterns and health impacts using distributed computing',
            id: 'Analitik Big Data pada pola konsumsi kopi dan dampak kesehatan menggunakan komputasi terdistribusi'
        },
        challenge: {
            en: 'Analyze large-scale data to understand the relationship between coffee consumption patterns and various health indicators across diverse populations.',
            id: 'Menganalisis data skala besar untuk memahami hubungan antara pola konsumsi kopi dan berbagai indikator kesehatan di berbagai populasi.'
        },
        solution: {
            en: 'Built comprehensive big data pipeline using Pentaho Data Integration for ETL processes, Apache Spark and PySpark for distributed computing, and Hadoop for data storage. Implemented machine learning models (Random Forest & Logistic Regression) to predict health impacts and conducted exploratory data analysis following the 5V big data framework.',
            id: 'Membangun pipeline big data komprehensif menggunakan Pentaho Data Integration untuk proses ETL, Apache Spark dan PySpark untuk komputasi terdistribusi, dan Hadoop untuk penyimpanan data. Mengimplementasikan model machine learning (Random Forest & Logistic Regression) untuk memprediksi dampak kesehatan dan melakukan analisis data eksploratori mengikuti framework 5V big data.'
        },
        impact: {
            en: 'Processed and analyzed large-scale datasets to identify key patterns between coffee consumption and health outcomes using distributed big data technologies',
            id: 'Memproses dan menganalisis dataset skala besar untuk mengidentifikasi pola kunci antara konsumsi kopi dan hasil kesehatan menggunakan teknologi big data terdistribusi'
        },
        tech: ['PySpark', 'Apache Spark', 'Hadoop', 'Pentaho Data Integration', 'Python', 'Random Forest', 'Logistic Regression'],
        links: { demo: null, github: null }
    },
    {
        id: 'student-score-prediction',
        title: {
            en: 'Student Score Prediction System',
            id: 'Sistem Prediksi Nilai Siswa'
        },
        category: 'Big Data',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/score/cover.jpg',
            '/projects/score/akademik.jpg',
            '/projects/score/ekonomi.jpg',
            '/projects/score/lingkungan.jpg'
        ],
        tagline: {
            en: 'Predicting high school final scores using Random Forest Classifier based on academic, economic, and environmental factors',
            id: 'Memprediksi nilai akhir siswa SMA menggunakan Random Forest Classifier berdasarkan faktor akademik, ekonomi, dan lingkungan'
        },
        challenge: {
            en: 'Predict student final scores by analyzing the complex interplay of multiple factors including academic performance, economic conditions, and environmental influences to enable early intervention for at-risk students.',
            id: 'Memprediksi nilai akhir siswa dengan menganalisis interaksi kompleks dari berbagai faktor termasuk performa akademik, kondisi ekonomi, dan pengaruh lingkungan untuk memungkinkan intervensi dini bagi siswa berisiko.'
        },
        solution: {
            en: 'Developed a Random Forest Classifier model with comprehensive feature engineering. Conducted feature importance analysis revealing AttendanceRate (28%), TestScore (24%), and StudyHours as primary predictors. Implemented comparative model evaluation and achieved robust prediction accuracy through data mining techniques.',
            id: 'Mengembangkan model Random Forest Classifier dengan feature engineering komprehensif. Melakukan analisis feature importance yang mengungkapkan AttendanceRate (28%), TestScore (24%), dan StudyHours sebagai prediktor utama. Mengimplementasikan evaluasi model komparatif dan mencapai akurasi prediksi yang robust melalui teknik data mining.'
        },
        impact: {
            en: 'Identified key factors affecting student performance with attendance rate as the most influential predictor, enabling data-driven educational interventions',
            id: 'Mengidentifikasi faktor kunci yang mempengaruhi performa siswa dengan tingkat kehadiran sebagai prediktor paling berpengaruh, memungkinkan intervensi pendidikan berbasis data'
        },
        tech: ['Python', 'Random Forest', 'Scikit-learn', 'Feature Engineering', 'Data Mining'],
        links: { demo: null, github: null }
    },
    {
        id: 'transjakarta-analysis',
        title: {
            en: 'Transjakarta Service Trouble Analysis',
            id: 'Analisis Masalah Layanan Transjakarta'
        },
        category: 'Data Mining',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2024',
            id: '2024'
        },
        images: [
            '/projects/transjakarta/image1.jpg',
            '/projects/transjakarta/image2.png'
        ],
        tagline: {
            en: "NLP analysis of social media X to identify Transjakarta's service pain points and frequent issues",
            id: 'Analisis NLP pada media sosial X untuk mengidentifikasi pain point pada layanan Transjakarta'
        },
        challenge: {
            en: 'Extract insights from social media conversations to identify common service issues and user complaints about Transjakarta.',
            id: 'Mengekstrak insight dari percakapan media sosial untuk mengidentifikasi masalah layanan umum dan keluhan pengguna tentang Transjakarta.'
        },
        solution: {
            en: 'Applied NLP techniques and FP-Growth algorithm to analyze Twitter (X) data. Performed sentiment analysis and pattern mining.',
            id: 'Menerapkan teknik NLP dan algoritma FP-Growth untuk menganalisis data Twitter (X). Melakukan sentiment analysis dan pattern mining.'
        },
        impact: {
            en: 'Identified key service improvement areas through data-driven insights',
            id: 'Mengidentifikasi area perbaikan layanan utama melalui insight berbasis data'
        },
        tech: ['Python', 'FP-Growth', 'NLP', 'Twitter API'],
        links: { demo: null, github: null }
    },
    {
        id: 'montirin',
        title: {
            en: 'MONTIRIN: Mechanic Service Marketplace',
            id: 'MONTIRIN: Marketplace Layanan Mekanik'
        },
        category: 'Development',
        featured: false,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2024',
            id: '2024'
        },
        images: [
            '/projects/website/image1.jpg',
            '/projects/website/image2.jpg'
        ],
        tagline: {
            en: 'On-demand marketplace connecting customers with mechanics via real-time ordering',
            id: 'Marketplace on-demand yang menghubungkan pelanggan dengan mekanik melalui pemesanan real-time'
        },
        challenge: {
            en: 'Create a platform that connects customers needing vehicle repairs with nearby mechanics in real-time.',
            id: 'Membuat platform yang menghubungkan pelanggan yang membutuhkan perbaikan kendaraan dengan mekanik terdekat secara real-time.'
        },
        solution: {
            en: 'Developed web-based marketplace using Laravel framework with real-time order management, mechanic matching, and service tracking.',
            id: 'Mengembangkan marketplace berbasis web menggunakan framework Laravel dengan manajemen pesanan real-time, pencocokan mekanik, dan pelacakan layanan.'
        },
        impact: {
            en: 'Successfully connected customers with mechanics through streamlined booking system',
            id: 'Berhasil menghubungkan pelanggan dengan mekanik melalui sistem pemesanan yang efisien'
        },
        tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
        links: { demo: null, github: null }
    },
    {
        id: 'mall-network',
        title: {
            en: 'Mall Network Infrastructure Blueprint',
            id: 'Rancangan Infrastruktur Jaringan Mall'
        },
        category: 'Network',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
            '/projects/mall network/image2.jpg'
        ],
        tagline: {
            en: 'Hierarchical core-access network design for multi-story infrastructure',
            id: 'Desain jaringan core-access hierarki untuk infrastruktur multi-lantai'
        },
        challenge: {
            en: 'Design a scalable and secure network architecture for a multi-story mall with diverse requirements.',
            id: 'Merancang arsitektur jaringan yang scalable dan aman untuk mall multi-lantai dengan kebutuhan beragam.'
        },
        solution: {
            en: 'Designed hierarchical core-access network topology using Cisco Packet Tracer. Implemented VLAN segmentation and routing protocols.',
            id: 'Merancang topologi jaringan core-access hierarki menggunakan Cisco Packet Tracer. Mengimplementasikan segmentasi VLAN dan protokol routing.'
        },
        impact: {
            en: 'Created comprehensive network blueprint with scalability and security best practices',
            id: 'Membuat blueprint jaringan komprehensif dengan best practices scalability dan keamanan'
        },
        tech: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'Network Security'],
        links: { demo: null, github: null }
    },
    {
        id: 'bank-microservice',
        title: {
            en: 'Cloud-Based Banking Microservice System',
            id: 'Sistem Microservice Perbankan Berbasis Cloud'
        },
        category: 'Network',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/bank/cover.jpg',
            '/projects/bank/concept.jpg',
            '/projects/bank/desain.jpg',
            '/projects/bank/api testing.jpg',
            '/projects/bank/fungsionalitas.jpg',
            '/projects/bank/fault tolerance.jpg'
        ],
        tagline: {
            en: 'Microservice architecture for banking transaction simulation deployed on Huawei Cloud with Account Service, Transaction Service, and Gateway',
            id: 'Arsitektur microservice untuk simulasi transaksi perbankan yang di-deploy pada Huawei Cloud dengan Account Service, Transaction Service, dan Gateway'
        },
        challenge: {
            en: 'Design and implement a scalable, fault-tolerant cloud-based banking system using microservice architecture that can handle concurrent transactions while maintaining data consistency and high availability.',
            id: 'Merancang dan mengimplementasikan sistem perbankan berbasis cloud yang scalable dan fault-tolerant menggunakan arsitektur microservice yang dapat menangani transaksi bersamaan sambil menjaga konsistensi data dan ketersediaan tinggi.'
        },
        solution: {
            en: 'Deployed a microservice-based architecture on Huawei Cloud with three core services: Account Service for managing customer accounts and balances, Transaction Service for withdrawal and transfer operations, and Gateway for routing requests. Implemented RESTful APIs for inter-service communication, designed a comprehensive database schema, and built a responsive web dashboard for account and transaction management. Conducted extensive API testing using Postman and fault tolerance testing to ensure system reliability on cloud infrastructure.',
            id: 'Mendeploy arsitektur berbasis microservice pada Huawei Cloud dengan tiga layanan inti: Account Service untuk mengelola akun dan saldo pelanggan, Transaction Service untuk operasi penarikan dan transfer, dan Gateway untuk routing request. Mengimplementasikan RESTful API untuk komunikasi antar-layanan, merancang skema database komprehensif, dan membangun dashboard web responsif untuk manajemen akun dan transaksi. Melakukan pengujian API ekstensif menggunakan Postman dan pengujian fault tolerance untuk memastikan keandalan sistem pada infrastruktur cloud.'
        },
        impact: {
            en: 'Successfully implemented a distributed banking system demonstrating cloud computing principles, microservice architecture, and API-driven communication with fault tolerance capabilities',
            id: 'Berhasil mengimplementasikan sistem perbankan terdistribusi yang mendemonstrasikan prinsip cloud computing, arsitektur microservice, dan komunikasi berbasis API dengan kemampuan fault tolerance'
        },
        tech: ['Huawei Cloud', 'Microservices', 'Cloud Computing', 'RESTful API', 'Postman', 'Gateway', 'Distributed Systems'],
        links: { demo: null, github: null }
    },
    {
        id: 'smartseal',
        title: {
            en: 'SmartSeal Anti-Counterfeit System',
            id: 'Sistem Anti-Pemalsuan SmartSeal'
        },
        category: 'Innovation',
        featured: true,
        organization: {
            en: 'Paragon IN:PACT',
            id: 'Paragon IN:PACT'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/inpact/image1.jpg',
            '/projects/inpact/image2.jpg'
        ],
        tagline: {
            en: 'QR-based anti-counterfeit system design for beauty product traceability',
            id: 'Desain sistem anti-pemalsuan berbasis QR untuk ketertelusuran produk kecantikan'
        },
        challenge: {
            en: 'Combat counterfeit beauty products that pose health risks and damage brand reputation.',
            id: 'Memerangi produk kecantikan palsu yang menimbulkan risiko kesehatan dan merusak reputasi merek.'
        },
        solution: {
            en: 'Designed QR code-based traceability system enabling consumers to verify product authenticity via blockchain-inspired verification.',
            id: 'Merancang sistem ketertelusuran berbasis kode QR yang memungkinkan konsumen memverifikasi keaslian produk via verifikasi terinspirasi blockchain.'
        },
        impact: {
            en: 'Recognized as Top 100 Innovators at Paragon IN:PACT 2025',
            id: 'Diakui sebagai Top 100 Innovator di Paragon IN:PACT 2025'
        },
        tech: ['QR Code', 'System Design', 'Blockchain Concept'],
        links: { demo: null, github: null }
    },
    // Additional projects (not featured)
    {
        id: 'ceo-dashboard',
        title: {
            en: 'CEO Executive Dashboard',
            id: 'Dashboard Eksekutif CEO'
        },
        category: 'Big Data',
        featured: false,
        organization: {
            en: 'Bootcamp Project',
            id: 'Proyek Bootcamp'
        },
        timeline: {
            en: '2024',
            id: '2024'
        },
        image: '/projects/website/ceo dashboard.jpg',
        tagline: {
            en: 'Executive dashboard tracking customer geos, product categories, and seller KPIs',
            id: 'Dashboard eksekutif melacak geo pelanggan, kategori produk, dan KPI penjual'
        },
        challenge: {
            en: 'Create comprehensive executive-level dashboard for strategic business decision-making across multiple data dimensions.',
            id: 'Membuat dashboard tingkat eksekutif yang komprehensif untuk pengambilan keputusan bisnis strategis di berbagai dimensi data.'
        },
        solution: {
            en: 'Built interactive dashboard in Looker Studio with SQL queries to visualize customer geography, product performance, and seller metrics.',
            id: 'Membangun dashboard interaktif di Looker Studio dengan query SQL untuk memvisualisasikan geografi pelanggan, performa produk, dan metrik penjual.'
        },
        impact: {
            en: 'Enabled data-driven executive decision-making with real-time KPI tracking',
            id: 'Memungkinkan pengambilan keputusan eksekutif berbasis data dengan pelacakan KPI real-time'
        },
        tech: ['SQL', 'Looker Studio', 'Data Analytics'],
        links: { demo: null, github: null }
    },
    {
        id: 'flood-prediction',
        title: {
            en: 'Flood Risk Prediction Model',
            id: 'Model Prediksi Risiko Banjir'
        },
        category: 'ML/AI',
        featured: false,
        organization: {
            en: 'Research Paper (SENAMIKA)',
            id: 'Artikel Penelitian (SENAMIKA)'
        },
        timeline: {
            en: '2024',
            id: '2024'
        },
        images: [
            '/projects/senamika/image1.jpg',
            '/projects/senamika/image2.jpg',
            '/projects/senamika/image3.jpg'
        ],
        tagline: {
            en: 'Comparative study of SVM vs. KNN for rainfall intensity prediction (90% Accuracy)',
            id: 'Studi komparatif SVM vs. KNN untuk prediksi intensitas curah hujan (90% Akurasi)'
        },
        challenge: {
            en: 'Predict flood risk based on rainfall intensity patterns to enable early warning systems.',
            id: 'Memprediksi risiko banjir berdasarkan pola intensitas curah hujan untuk memungkinkan sistem peringatan dini.'
        },
        solution: {
            en: 'Conducted comparative analysis between SVM and KNN algorithms. Evaluated model performance on historical rainfall data achieving 90% accuracy.',
            id: 'Melakukan analisis komparatif antara algoritma SVM dan KNN. Mengevaluasi performa model pada data historis curah hujan mencapai akurasi 90%.'
        },
        impact: {
            en: 'Published research findings at SENAMIKA conference with 90% prediction accuracy',
            id: 'Mempublikasikan temuan penelitian di konferensi SENAMIKA dengan akurasi prediksi 90%'
        },
        tech: ['Python', 'SVM', 'KNN', 'Scikit-learn'],
        links: { demo: '#', github: null }
    },
    {
        id: 'vina-sentiment',
        title: {
            en: '"Vina: Sebelum 7 Hari" Movie Sentiment Analysis',
            id: 'Analisis Sentimen Film "Vina: Sebelum 7 Hari"'
        },
        category: 'ML/AI',
        featured: false,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2024',
            id: '2024'
        },
        images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop',
            '/projects/vina/image1.jpg'
        ],
        tagline: {
            en: 'NLP analysis of 2,000+ tweets using SMOTE and Naïve Bayes with 77% accuracy',
            id: 'Analisis NLP dari 2.000+ tweet menggunakan SMOTE dan Naïve Bayes dengan akurasi 77%'
        },
        challenge: {
            en: 'Analyze public sentiment from social media about specific topic using balanced dataset and machine learning classification.',
            id: 'Menganalisis sentimen publik dari media sosial tentang topik tertentu menggunakan dataset seimbang dan klasifikasi machine learning.'
        },
        solution: {
            en: 'Collected and processed 2,000+ tweets. Applied SMOTE for class balancing and Naïve Bayes classifier for sentiment prediction.',
            id: 'Mengumpulkan dan memproses 2.000+ tweet. Menerapkan SMOTE untuk penyeimbangan kelas dan classifier Naïve Bayes untuk prediksi sentimen.'
        },
        impact: {
            en: 'Achieved 77% accuracy in sentiment classification using NLP techniques',
            id: 'Mencapai akurasi 77% dalam klasifikasi sentimen menggunakan teknik NLP'
        },
        tech: ['Python', 'Naïve Bayes', 'NLP', 'SMOTE'],
        links: { demo: null, github: null }
    },
    {
        id: 'covid-clustering',
        title: {
            en: 'COVID-19 Risk Clusterization in Jakarta',
            id: 'Klusterisasi Risiko COVID-19 di Jakarta'
        },
        category: 'Data Mining',
        featured: false,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2023',
            id: '2023'
        },
        images: ['https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2032&auto=format&fit=crop',
            '/projects/covid/image1.jpg',
            '/projects/covid/image2.jpg',
            '/projects/covid/image3.jpg',
            '/projects/covid/image4.jpg'
        ],
        tagline: {
            en: "Clustering Jakarta's sub-districts to track risk levels and vaccination impact",
            id: 'Klasterisasi pada kecamatan Jakarta untuk melacak tingkat risiko dan dampak vaksinasi'
        },
        challenge: {
            en: 'Analyze and cluster Jakarta sub-districts based on COVID-19 risk factors and vaccination coverage.',
            id: 'Menganalisis dan mengelompokkan kecamatan Jakarta berdasarkan faktor risiko COVID-19 dan cakupan vaksinasi.'
        },
        solution: {
            en: 'Applied K-Means Clustering algorithm to group sub-districts by risk level. Analyzed vaccination impact on risk reduction.',
            id: 'Menerapkan algoritma Clustering K-Means untuk mengelompokkan kecamatan berdasarkan tingkat risiko. Menganalisis dampak vaksinasi pada pengurangan risiko.'
        },
        impact: {
            en: 'Identified high-risk areas and vaccination effectiveness patterns across Jakarta',
            id: 'Mengidentifikasi area berisiko tinggi dan pola efektivitas vaksinasi di Jakarta'
        },
        tech: ['Python', 'K-Means', 'Jupyter', 'Data Analysis'],
        links: { demo: null, github: null }
    },
    {
        id: 'barbershop-app',
        title: {
            en: 'Barbershop Booking Application',
            id: 'Aplikasi Booking Barbershop'
        },
        category: 'Development',
        featured: false,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2023',
            id: '2023'
        },
        images: [
            '/projects/barbershop/image1.png',
            '/projects/barbershop/image2.png',
            '/projects/barbershop/image3.png',
            '/projects/barbershop/image4.png'
        ],
        tagline: {
            en: 'Java-based barbershop system managing queues and service durations through Object-Oriented Programming concept.',
            id: 'Sistem barbershop berbasis Java mengelola antrian dan durasi layanan dengan konsep Pemrograman Berorientasi Objek'
        },
        challenge: {
            en: 'Create efficient queue management system for barbershop to handle customer bookings and service scheduling.',
            id: 'Membuat sistem manajemen antrian yang efisien untuk pangkas rambut guna menangani pemesanan pelanggan dan penjadwalan layanan.'
        },
        solution: {
            en: 'Developed Java desktop application using Swing GUI and OOP principles. Implemented queue management and service duration tracking with MySQL database.',
            id: 'Mengembangkan aplikasi desktop Java menggunakan GUI Swing dan prinsip Pemrograman Berorientasi Objek. Mengimplementasikan manajemen antrian dan pelacakan durasi layanan dengan database MySQL.'
        },
        impact: {
            en: 'Streamlined barbershop operations with automated queue and booking management',
            id: 'Mempermudah operasi pangkas rambut dengan manajemen antrian dan booking otomatis'
        },
        tech: ['Java', 'Swing', 'MySQL', 'OOP'],
        links: { demo: null, github: null }
    },
    {
        id: 'railink-app',
        title: {
            en: 'Railink: Commuter Line App',
            id: 'Railink: Aplikasi Commuter Line'
        },
        category: 'Development',
        featured: true,
        organization: {
            en: 'Academic Project',
            id: 'Proyek Akademik'
        },
        timeline: {
            en: '2025',
            id: '2025'
        },
        images: [
            '/projects/railink/image1.jpg',
            '/projects/railink/image2.png'
        ],
        tagline: {
            en: 'Android app with real-time schedule tracking and GPS-based nearest Greater Jakarta Commuterline station detection',
            id: 'Aplikasi Android dengan pelacakan jadwal real-time dan deteksi stasiun KRL Commuterline Jabodetabek terdekat berbasis GPS'
        },
        challenge: {
            en: 'Commuters need an efficient way to track train schedules and find the nearest stations using their mobile devices.',
            id: 'Penumpang membutuhkan cara efisien untuk melacak jadwal kereta dan menemukan stasiun terdekat menggunakan perangkat mobile mereka.'
        },
        solution: {
            en: 'Developed Android mobile application using Java with real-time schedule tracking, GPS-based location services to detect nearest stations, and integrated Firebase for data management.',
            id: 'Mengembangkan aplikasi mobile Android menggunakan Java dengan pelacakan jadwal real-time, layanan lokasi berbasis GPS untuk mendeteksi stasiun terdekat, dan terintegrasi dengan Firebase untuk manajemen data.'
        },
        impact: {
            en: 'Provided commuters with convenient access to train schedules and location-based station information',
            id: 'Memberikan penumpang akses mudah ke jadwal kereta dan informasi stasiun berbasis lokasi'
        },
        tech: ['Java', 'Android Studio', 'Firebase', 'GPS'],
        links: { demo: null, github: null }
    }
];

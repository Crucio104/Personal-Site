#!/usr/bin/env python3
"""
Generate a modern, recruiter-standard, ATS-optimized Curriculum Vitae in PDF format
for Alessio Curcio, styled with the elegant Bordeaux & Beige palette.
Accurate, concise, professional tone highlighting 110/110 graduation from B.Sc. ACSAI.
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.pdfgen import canvas

# Palette: Bordeaux & Warm Beige
BORDEAUX = colors.HexColor("#7B1E2B")
BORDEAUX_DARK = colors.HexColor("#5A141F")
BORDEAUX_LIGHT = colors.HexColor("#9E2A3B")
BEIGE_ACCENT = colors.HexColor("#D4B996")
BEIGE_LIGHT = colors.HexColor("#F7F3EE")
CHARCOAL = colors.HexColor("#1A202C")
MUTED_GREY = colors.HexColor("#4A5568")
LIGHT_LINE = colors.HexColor("#E2E8F0")

class NumberedCanvas(canvas.Canvas):
    """Adds page numbers and subtle footer to the document."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(MUTED_GREY)
        
        # Footer
        footer_text = f"Alessio Curcio — Curriculum Vitae | Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 36, 24, footer_text)
        
        # Subtle bottom decorative accent line
        self.setStrokeColor(BEIGE_ACCENT)
        self.setLineWidth(0.75)
        self.line(36, 34, letter[0] - 36, 34)
        
        self.restoreState()


def build_cv(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=42
    )

    styles = getSampleStyleSheet()
    
    # Custom Paragraph Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=BORDEAUX,
        alignment=0
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=BORDEAUX_DARK,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=CHARCOAL,
        alignment=0
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=BORDEAUX,
        spaceBefore=0,
        spaceAfter=0
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=CHARCOAL
    )

    item_subtitle_style = ParagraphStyle(
        'ItemSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=MUTED_GREY
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=CHARCOAL
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.8,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=CHARCOAL
    )

    def section_header(title_text):
        """Standard ATS Section Header with elegant underline."""
        return [
            Spacer(1, 6),
            Paragraph(title_text.upper(), section_heading_style),
            Spacer(1, 2),
            HRFlowable(width="100%", thickness=1.2, color=BORDEAUX, spaceBefore=1, spaceAfter=5),
        ]

    story = []

    # ==========================
    # 1. HEADER SECTION
    # ==========================
    header_data = [
        [
            Paragraph("<b>ALESSIO CURCIO</b>", title_style),
            Paragraph("<b>Rome, Italy</b><br/>alessio.curcio04@gmail.com | +39 371 171 2524", contact_style)
        ],
        [
            Paragraph("<b>Artificial Intelligence & Robotics Engineer</b> | M.Sc. Student @ Sapienza University of Rome", subtitle_style),
            Paragraph("<a href='https://linkedin.com/in/alessio-curcio-7787b935a'><b>linkedin.com/in/alessio-curcio</b></a><br/><a href='https://github.com/Crucio104'><b>github.com/Crucio104</b></a>", contact_style)
        ]
    ]

    header_table = Table(header_data, colWidths=[360, 180])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.8, color=BEIGE_ACCENT, spaceBefore=2, spaceAfter=6))

    # ==========================
    # 2. PROFESSIONAL SUMMARY
    # ==========================
    story.extend(section_header("Professional Summary"))
    summary_text = (
        "Software Engineer and M.Sc. student in <b>Artificial Intelligence & Robotics (AIRO)</b> at "
        "<b>Sapienza University of Rome</b>, holding a Bachelor's degree in <b>Applied Computer Science and "
        "Artificial Intelligence (ACSAI)</b> graduated with <b>110 / 110</b> (taught entirely in English). "
        "Completed a research software engineering internship at <b>INGV</b> (National Institute of Geophysics and Volcanology) "
        "developing <i>Seismic Viewer 4D</i>. Scored 30 and 30 cum laude in university programming examinations (Python and Java). "
        "Technical focus on <b>Multi-Agent Systems</b>, <b>Local LLMs</b>, <b>Computer Vision (YOLO)</b>, "
        "and <b>Concurrent Robotic Control</b>. Problem-solving background across national "
        "Mathematics and Informatics Olympiads and maximum score in the TeraBebras competition."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # ==========================
    # 3. EDUCATION
    # ==========================
    story.extend(section_header("Education"))

    # Master AIRO
    edu_airo = [
        [
            Paragraph("<b>Master of Science (M.Sc.) in Artificial Intelligence and Robotics</b>", item_title_style),
            Paragraph("<b>2026 – Present</b>", ParagraphStyle('R', parent=item_title_style, alignment=2))
        ],
        [
            Paragraph("Sapienza University of Rome — Faculty of Information Engineering, Informatics and Statistics", item_subtitle_style),
            Paragraph("Rome, Italy", ParagraphStyle('R2', parent=item_subtitle_style, alignment=2))
        ]
    ]
    t_airo = Table(edu_airo, colWidths=[420, 120])
    t_airo.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1)
    ]))
    story.append(KeepTogether([
        t_airo,
        Paragraph("• <b>Curriculum:</b> Autonomous Robotics, Computer Vision, Multi-Agent Systems, Reinforcement Learning, Robot Programming.", bullet_style),
        Spacer(1, 4)
    ]))

    # Bachelor ACSAI
    edu_acsai = [
        [
            Paragraph("<b>Bachelor of Science (B.Sc.) in Applied Computer Science and AI (ACSAI)</b>", item_title_style),
            Paragraph("<b>Grade: 110 / 110</b>", ParagraphStyle('R3', parent=item_title_style, alignment=2))
        ],
        [
            Paragraph("Sapienza University of Rome — Degree Program Taught 100% in English", item_subtitle_style),
            Paragraph("Rome, Italy", ParagraphStyle('R4', parent=item_subtitle_style, alignment=2))
        ]
    ]
    t_acsai = Table(edu_acsai, colWidths=[390, 150])
    t_acsai.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1)
    ]))
    story.append(KeepTogether([
        t_acsai,
        Paragraph("• <b>Final Graduation Grade:</b> 110 / 110.", bullet_style),
        Paragraph("• <b>B.Sc. Thesis & Internship:</b> INGV (Istituto Nazionale di Geofisica e Vulcanologia) — <i>Seismic Viewer 4D</i>.", bullet_style),
        Paragraph("• <b>Honors:</b> Maximum grades (30 and 30 cum laude) in University Programming Examinations (Python and Java).", bullet_style),
        Paragraph("• <b>Coursework:</b> Data Structures & Algorithms, Operating Systems, Databases, Software Architecture, Networks, AI, Concurrent Programming.", bullet_style),
        Spacer(1, 4)
    ]))

    # High School
    edu_hs = [
        [
            Paragraph("<b>Scientific High School Diploma — Applied Sciences Curriculum</b>", item_title_style),
            Paragraph("<b>Grade: 98 / 100</b>", ParagraphStyle('R5', parent=item_title_style, alignment=2))
        ],
        [
            Paragraph("Liceo Scientifico Statale 'Vito Volterra'", item_subtitle_style),
            Paragraph("Graduated 2023", ParagraphStyle('R6', parent=item_subtitle_style, alignment=2))
        ]
    ]
    t_hs = Table(edu_hs, colWidths=[420, 120])
    t_hs.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1)
    ]))
    story.append(KeepTogether([t_hs, Spacer(1, 4)]))

    # ==========================
    # 4. TECHNICAL SKILLS
    # ==========================
    story.extend(section_header("Technical Skills"))

    skills_data = [
        [
            Paragraph("<b>AI & Computer Vision:</b>", item_title_style),
            Paragraph("PyTorch, TensorFlow, Keras, YOLOv11, OpenCV, Local LLMs (LM Studio), Hugging Face, Qwen3-TTS, Scikit-Learn, Reinforcement Learning.", body_style)
        ],
        [
            Paragraph("<b>Programming Languages:</b>", item_title_style),
            Paragraph("Python, Java, C, C++, Go (Golang), TypeScript, JavaScript, SQL, Bash, R.", body_style)
        ],
        [
            Paragraph("<b>Backend & Distributed:</b>", item_title_style),
            Paragraph("Go, Docker, Docker Compose, Node.js, WebSockets, PostgreSQL, REST APIs, POSIX Multithreading.", body_style)
        ],
        [
            Paragraph("<b>Frontend & UI:</b>", item_title_style),
            Paragraph("React, Vue.js, TailwindCSS, HTML5/CSS3, PyQt5, Tkinter, Flet.", body_style)
        ],
        [
            Paragraph("<b>Tools & Systems:</b>", item_title_style),
            Paragraph("Git, GitHub, Linux, Tesseract OCR, Streamlit, IBM Cloud & Watson.", body_style)
        ]
    ]

    t_skills = Table(skills_data, colWidths=[150, 390])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 1.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1.5),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 4))

    # ==========================
    # 5. TECHNICAL PROJECTS
    # ==========================
    story.extend(section_header("Key Technical Projects (GitHub: Crucio104)"))

    projects = [
        (
            "OpenSyntax AI Coding Workspace",
            "TypeScript, Multi-Agent, React, Local LLMs, Node.js",
            [
                "Workspace using <b>multi-agent orchestration</b> for software development.",
                "Supports dynamic scaffolding and compilation across Python, C/C++, Java, Go, and Rust.",
                "Hybrid support for local LLMs (via LM Studio) and cloud endpoints (OpenAI)."
            ]
        ),
        (
            "Local LLM Email Agent",
            "Python, LM Studio, Desktop GUI, Local AI Automation",
            [
                "Inbox assistant operating locally without sending email data to external cloud services.",
                "Uses LM Studio for message summaries, task identification, and rule-based priority tagging."
            ]
        ),
        (
            "Echo Real-Time Messaging Platform",
            "Go (Golang), Vue.js, WebSockets, Docker Compose, PostgreSQL",
            [
                "Messaging platform built for the Web & Software Architecture examination.",
                "WebSocket duplex communication for 1-to-1 chats and group channels with Docker containerization."
            ]
        ),
        (
            "League of Legends Autonomous Bot (YOLOv11)",
            "Python, YOLOv11, Computer Vision, PyTorch, Screen Analysis",
            [
                "Real-time computer vision agent using <b>YOLOv11</b> for minion detection and priority scoring.",
                "Executes target prioritization, skillshots, and turret proximity safety routines."
            ]
        ),
        (
            "Voice Cloning & Speech Synthesis (Qwen3-TTS)",
            "TypeScript, React, Docker, Speech AI, Qwen3-TTS",
            [
                "Web client for zero-shot voice cloning and multilingual speech synthesis using Qwen3-TTS.",
                "Built with React and containerized with Docker."
            ]
        ),
        (
            "Stock Market Predictor (LSTM)",
            "Python, LSTM Neural Networks, Streamlit, Pandas, Yahoo Finance",
            [
                "Time-series forecasting models using Long Short-Term Memory (LSTM) recurrent neural networks.",
                "Yahoo Finance data integration, technical moving averages, and interactive Streamlit UI."
            ]
        ),
        (
            "PDF File Extractor & OCR Desktop App",
            "Python, PyQt5, Tesseract OCR, DOCX/TXT Export",
            [
                "Desktop tool to extract text from digital and scanned PDFs via Tesseract OCR.",
                "Multi-language recognition and document export in DOCX and TXT."
            ]
        ),
        (
            "Concurrent & Robotic Systems Programming",
            "C, C++, POSIX Threads, Mutex Synchronization, Kinematics",
            [
                "Multi-threaded concurrent programs with thread synchronization (mutex, semaphores).",
                "Robotic kinematic transformations and sensor feedback processing algorithms."
            ]
        )
    ]

    for p_title, p_tech, p_bullets in projects:
        proj_header = [
            [
                Paragraph(f"<b>{p_title}</b>", item_title_style),
                Paragraph(f"<i>{p_tech}</i>", ParagraphStyle('R_proj', parent=item_subtitle_style, alignment=2, textColor=BORDEAUX))
            ]
        ]
        t_proj = Table(proj_header, colWidths=[310, 230])
        t_proj.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 1),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 1)
        ]))
        
        proj_flowables = [t_proj]
        for b in p_bullets:
            proj_flowables.append(Paragraph(f"• {b}", bullet_style))
        proj_flowables.append(Spacer(1, 3))
        story.append(KeepTogether(proj_flowables))

    # ==========================
    # 6. RESEARCH & INDUSTRY EXPERIENCE
    # ==========================
    story.extend(section_header("Research & Industry Experience"))

    exp_data = [
        (
            "Software Engineering Research Intern — Seismic Viewer 4D",
            "INGV (Istituto Nazionale di Geofisica e Vulcanologia)",
            "Curricular Internship & Thesis",
            [
                "Designed and developed <b>Seismic Viewer</b>, an interactive 4D desktop application for spatio-temporal seismic data visualization.",
                "Engineered Python scientific backend for spatial clustering and automated geological fault plane estimation.",
                "Built WebGL 3D rendering frontend with binary streaming protocol achieving an 80% data reduction vs. JSON, sustaining interactive framerates.",
                "Integrated real-time INGV GOSSIP API, GNSS ground uplift measurements, and 3D seismic tomography."
            ]
        ),
        (
            "Data Analytics & Conversational AI",
            "IBM & Sapienza University",
            "Academic Project",
            [
                "Big Data analytics for profiling models from public data streams; built customer support chatbots with IBM Cloud and Watson services."
            ]
        ),
        (
            "Software & Telecom Labs",
            "Ericsson & Fondazione Mondo Digitale",
            "Technical Program",
            [
                "Technical problem solving in telecommunications, applied object-oriented software design, and robotics."
            ]
        )
    ]

    for title, org, period, bullets in exp_data:
        exp_table = [
            [
                Paragraph(f"<b>{title}</b> — {org}", item_title_style),
                Paragraph(f"<b>{period}</b>", ParagraphStyle('R_exp', parent=item_subtitle_style, alignment=2))
            ]
        ]
        t_exp = Table(exp_table, colWidths=[400, 140])
        t_exp.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 1),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 1)
        ]))
        exp_flowables = [t_exp]
        for b in bullets:
            exp_flowables.append(Paragraph(f"• {b}", bullet_style))
        exp_flowables.append(Spacer(1, 3))
        story.append(KeepTogether(exp_flowables))

    # ==========================
    # 7. COMPETITIONS & CERTIFICATIONS
    # ==========================
    story.extend(section_header("Competitions, Honors & Certifications"))

    honors = [
        "<b>TeraBebras Competition:</b> Achieved the <b>maximum score</b> in computational thinking and algorithm design.",
        "<b>Mathematics & Computer Science Olympiads:</b> Qualified for regional and national stages in Italian Mathematics, Informatics and Problem Solving Olympiads.",
        "<b>Bocconi University Mathematics Games:</b> Advanced to national ranking rounds.",
        "<b>National Cybersecurity Competition:</b> Cleared qualification stages in security and cryptography challenges.",
        "<b>Languages:</b> <b>Italian</b> (Native), <b>English</b> (CEFR B2 Certification, English B.Sc. degree curriculum, Oxford study abroad)."
    ]

    honors_flowables = []
    for h in honors:
        honors_flowables.append(Paragraph(f"• {h}", bullet_style))
    story.append(KeepTogether(honors_flowables))

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Recruiter CV successfully created at: {output_path}")


if __name__ == '__main__':
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets/docs/Alessio_Curcio_CV.pdf')
    build_cv(out)

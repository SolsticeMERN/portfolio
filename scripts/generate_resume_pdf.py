#!/usr/bin/env python3
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    Table,
    TableStyle,
)

def create_resume(output_path):
    # 0.4 inch margins (28.8 pt) to comfortably fit executive single-page format
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=26,
        bottomMargin=26,
    )

    styles = getSampleStyleSheet()

    title_color = colors.HexColor("#111827")
    sub_color = colors.HexColor("#4B5563")
    body_color = colors.HexColor("#1F2937")
    rule_color = colors.HexColor("#374151")

    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=19,
        leading=22,
        alignment=1, # Centered
        textColor=title_color,
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        alignment=1, # Centered
        textColor=sub_color,
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.2,
        leading=11.5,
        textColor=title_color,
        spaceAfter=1,
    )

    role_title_style = ParagraphStyle(
        'RoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.5,
        textColor=title_color,
    )

    role_meta_right = ParagraphStyle(
        'RoleMetaRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11.5,
        alignment=2, # Right aligned
        textColor=colors.HexColor("#374151"),
    )

    company_sub_style = ParagraphStyle(
        'CompanySub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.4,
        leading=10.5,
        textColor=colors.HexColor("#374151"),
    )

    summary_style = ParagraphStyle(
        'SummaryBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=body_color,
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.8,
        textColor=body_color,
    )

    skills_label_style = ParagraphStyle(
        'SkillsLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11,
        textColor=title_color,
    )

    skills_value_style = ParagraphStyle(
        'SkillsValue',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=body_color,
    )

    story = []

    # 1. HEADER (Name & Single-line Contact info)
    story.append(Paragraph("Md Shakil Sarker", name_style))
    story.append(Spacer(1, 3))
    
    contact_line = (
        "Bogura, Bangladesh &nbsp;•&nbsp; "
        "shakil.srkr.bd@gmail.com &nbsp;•&nbsp; "
        "+8801783025100 &nbsp;•&nbsp; "
        '<a href="https://www.linkedin.com/in/shakilleadgen/" color="#1D4ED8"><u>linkedin.com/in/shakilleadgen</u></a> &nbsp;•&nbsp; '
        '<a href="https://cienceleads.com/" color="#1D4ED8"><u>cienceleads.com</u></a>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 6))

    # Helper for Section Heading with Underline
    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=rule_color, spaceBefore=1, spaceAfter=3.5))

    # Helper for Job/Role Row
    def add_role_header(title, company, meta_right):
        row = [
            [Paragraph(title, role_title_style), Paragraph(meta_right, role_meta_right)],
            [Paragraph(company, company_sub_style), Paragraph("", role_meta_right)]
        ]
        t = Table(row, colWidths=[370, 178])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ]))
        story.append(t)
        story.append(Spacer(1, 1.5))

    # 2. PROFESSIONAL SUMMARY
    add_section_header("Professional Summary")
    summary_text = (
        "Versatile professional with corporate and freelance experience specializing in B2B lead generation, "
        "online business research, data management, client communication, and digital marketing. Holds a Bachelor of Education "
        "(B.Ed.) in Science Education from Khulna University (CGPA 3.58/4.00) with published empirical research in secondary mathematics pedagogy. "
        "Knowledgeable in Google Ads, Meta Ads, SEO, email marketing, and market research. Demonstrates strong analytical, "
        "organizational, and cross-functional leadership abilities suited for banking, corporate operations, digital marketing, and administration."
    )
    story.append(Paragraph(summary_text, summary_style))
    story.append(Spacer(1, 5))

    # 3. PROFESSIONAL EXPERIENCE
    add_section_header("Professional Experience")

    # Experience 1: Freelance Lead Generation Specialist
    add_role_header(
        "Freelance Lead Generation Specialist",
        "Independent Freelance Professional (Fiverr & Upwork)",
        "January 2021 — Present &nbsp;|&nbsp; Remote"
    )
    freelance_bullets = [
        "Delivered end-to-end B2B lead generation, prospect identification, and web research services to international business clients.",
        "Conducted targeted LinkedIn research and curated verified decision-maker contact lists tailored to niche industry criteria.",
        "Executed multi-step data verification to eliminate duplicate records, validate email deliverability, and maintain CRM hygiene.",
        "Managed client project requirements, maintained prompt async communication, and delivered structured spreadsheets on schedule.",
        "<b>Areas of Expertise:</b> B2B Sales & Lead Generation, CRM Data Management, Online Research, Client Coordination."
    ]
    for b in freelance_bullets:
        bullet_item = f"• &nbsp;{b}"
        story.append(Paragraph(bullet_item, bullet_style))
        story.append(Spacer(1, 1.2))
    story.append(Spacer(1, 4))

    # Experience 2: SJ Innovation LLC
    add_role_header(
        "Lead Generation Specialist",
        "SJ Innovation LLC (IT & Software Development)",
        "August 2021 — February 2023 &nbsp;|&nbsp; Remote"
    )
    sj_bullets = [
        "Conducted strategic B2B lead generation and targeted online research to identify prospective enterprise and mid-market accounts.",
        "Researched, verified, and organized business contact intelligence across multiple international commercial sectors.",
        "Maintained CRM data accuracy and upheld quality benchmarks through systematic data cleansing and email domain verification.",
        "Collaborated cross-functionally with sales and marketing teams to align prospect lists with campaign parameters and strict delivery timelines.",
        "<b>Areas of Expertise:</b> B2B Lead Prospecting, CRM Data Organization, Prospect Verification, Account Discovery."
    ]
    for b in sj_bullets:
        bullet_item = f"• &nbsp;{b}"
        story.append(Paragraph(bullet_item, bullet_style))
        story.append(Spacer(1, 1.2))
    story.append(Spacer(1, 5))

    # 4. ACADEMIC RESEARCH & PUBLICATION
    add_section_header("Academic Research & Publication")
    pub_title = '<b>Effect of Student-Centered Teaching on Mathematics Performance at Secondary Level</b>'
    pub_meta = "Published: September 12, 2024 &nbsp;|&nbsp; ResearchGate"
    pub_row = [
        [Paragraph(pub_title, role_title_style), Paragraph(pub_meta, role_meta_right)]
    ]
    t_pub = Table(pub_row, colWidths=[370, 178])
    t_pub.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_pub)
    story.append(Spacer(1, 1.5))

    pub_bullets = [
        "Conducted empirical research investigating how student-centered pedagogical models impact academic performance in secondary mathematics.",
        "Utilized a quasi-experimental design and convenience sampling to assess comparative gains between experimental and control cohorts.",
        'Publication URL: <a href="https://www.researchgate.net/publication/387678538_Effect_of_Student-Centered_Teaching_Approach_on_Academic_Performance_in_Mathematics_at_the_Secondary_School_Level" color="#1D4ED8"><u>researchgate.net/publication/387678538</u></a>'
    ]
    for b in pub_bullets:
        bullet_item = f"• &nbsp;{b}"
        story.append(Paragraph(bullet_item, bullet_style))
        story.append(Spacer(1, 1.2))
    story.append(Spacer(1, 5))

    # 5. EDUCATION
    add_section_header("Education")
    edu_row = [
        [
            Paragraph("Bachelor of Education (B.Ed.) in Science Education", role_title_style),
            Paragraph("Graduated 2023 &nbsp;|&nbsp; Khulna, Bangladesh", role_meta_right)
        ],
        [
            Paragraph("Khulna University &nbsp;•&nbsp; 4-Year Full-Time Degree Program &nbsp;•&nbsp; <b>CGPA: 3.58 / 4.00</b>", company_sub_style),
            Paragraph("", role_meta_right)
        ]
    ]
    t_edu = Table(edu_row, colWidths=[380, 168])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 5))

    # 6. LEADERSHIP & EXTRACURRICULAR ACHIEVEMENTS
    add_section_header("Leadership & Extracurricular Achievements")
    leadership_bullets = [
        "<b>University Athletics Captaincy:</b> Served as Captain of the Khulna University Men's Cricket Team and Men's Volleyball Team; official Trainer for the University Women's Volleyball Team.",
        "<b>Annual Tour Leadership:</b> Directed Khulna University annual tours for 3 consecutive years; coordinated logistics, lodging, transport, safety, and budget for groups of 70–80 participants.",
        "<b>Event Organization & Honors:</b> Organized institutional debates, academic seminars, and school programs; earned multiple sports medals, awards, and certificates in cricket, football, volleyball, and badminton."
    ]
    for b in leadership_bullets:
        bullet_item = f"• &nbsp;{b}"
        story.append(Paragraph(bullet_item, bullet_style))
        story.append(Spacer(1, 1.2))
    story.append(Spacer(1, 5))

    # 7. EXPERT-LEVEL SKILLS & TECHNICAL TOOLS
    add_section_header("Skills & Competencies")
    skills_rows = [
        [
            Paragraph("<b>Digital Marketing:</b>", skills_label_style),
            Paragraph("Google Ads, Meta Ads, Search Engine Optimization (SEO), Email Marketing, Advertising & Promotion, Market Research", skills_value_style)
        ],
        [
            Paragraph("<b>Research & Data:</b>", skills_label_style),
            Paragraph("B2B Lead Generation, LinkedIn Research, CRM Data Management, Data Verification, Online Market Research, Business Research", skills_value_style)
        ],
        [
            Paragraph("<b>Professional Skills:</b>", skills_label_style),
            Paragraph("Client Communication, Analytical Thinking, Problem Solving, Project Coordination, Time Management, Team Leadership", skills_value_style)
        ],
        [
            Paragraph("<b>Technical Tools:</b>", skills_label_style),
            Paragraph("CRM Platforms, LLM-Based Tools, Slack, Discord, Google Workspace, Advanced Spreadsheets", skills_value_style)
        ],
        [
            Paragraph("<b>Languages:</b>", skills_label_style),
            Paragraph("Bengali (Native / High Proficiency), English (High Professional Working Proficiency)", skills_value_style)
        ],
    ]
    t_skills = Table(skills_rows, colWidths=[105, 443])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_skills)

    # Build PDF
    doc.build(story)
    print(f"Successfully generated ATS Resume PDF at: {output_path}")

if __name__ == "__main__":
    out1 = "public/Md_Shakil_Sarker_Resume.pdf"
    out2 = "public/Shakil_Sarker_Resume.pdf"
    out3 = "public/resume.pdf"
    create_resume(out1)
    create_resume(out2)
    create_resume(out3)

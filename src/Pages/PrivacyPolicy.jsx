import React from 'react';

export function PrivacyPolicy() {
    return (
        <div className='personal-text'>
            <h2>Privacy Policy</h2>
            <p>Last Updated: 20.09.2023</p>
            
            <h3>Information We Collect</h3>
            <p>We collect the following information when you use our contact form:</p>
            <ul>
                <li><strong>Name:</strong> Your name, provided voluntarily.</li>
                <li><strong>Email Address:</strong> Your email address, provided voluntarily.</li>
                <li><strong>Message:</strong> The message you enter in the contact form, provided voluntarily.</li>
            </ul>
            
            <h3>How We Use Your Information</h3>
            <p>We use the information collected via our contact form solely for the purpose of responding to your inquiries or messages. We do not share, sell, or use this information for any other purpose.</p>
            
            <h3>Data Retention</h3>
            <p>We retain the information you provide through the contact form for as long as necessary to fulfill the purpose for which it was collected or as required by law.</p>
            
            <h3>Contact Me</h3>
            <p>If you have any questions about this Privacy Policy, please <a className="fancyText" href="mailto:bischof.david.db@gmail.com" target="_blank" rel="noopener noreferrer">contact me</a>.</p>
            
            <p>By using our contact form, you consent to the practices described in this policy.</p>
        </div>
    );
}

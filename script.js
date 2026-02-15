// Content Locker URLs - UPDATED WITH MYLEAD LOCKER
const CONTENT_LOCKER_URLS = {
    premium: "https://bestlocker.eu/cpl/5aa3dde8-0a8e-11f1-864c-4e5c1971bddc",
    basic: "https://bestlocker.eu/cpl/5aa3dde8-0a8e-11f1-864c-4e5c1971bddc"
};

// Download URLs - UPDATED WITH YOUR MEDIAFIRE LINK
const DOWNLOAD_URLS = {
    premium: "https://www.mediafire.com/file/r5r10rywsh9kt54/neon+characters.zip/file",
    basic: "https://www.mediafire.com/file/r5r10rywsh9kt54/neon+characters.zip/file"
};

function unlockContent(packType) {
    // Hide all buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.style.display = 'none';
    });
    
    // Show loading state
    const loadingHTML = `
        <div class="loading-section">
            <div class="spinner"></div>
            <h3>🔄 Preparing Your ${packType.toUpperCase()} Pack...</h3>
            <p>Redirecting to verification...</p>
        </div>
    `;
    document.querySelector('.buttons-container').insertAdjacentHTML('afterend', loadingHTML);
    
    // Redirect to Content Locker after 2 seconds
    setTimeout(() => {
        window.location.href = CONTENT_LOCKER_URLS[packType];
    }, 2000);
}

// دالة جديدة للتحقق من إكمال المهمة
function checkTaskCompletion() {
    const urlParams = new URLSearchParams(window.location.search);
    const completed = urlParams.get('completed');
    
    if (completed === 'true') {
        showDownloadLink('premium');
    }
}

function showDownloadLink(packType) {
    const loadingSection = document.querySelector('.loading-section');
    if (loadingSection) {
        loadingSection.remove();
    }
    
    const successHTML = `
        <div class="success-section">
            <div class="success-icon">✅</div>
            <h3>🎉 Task Completed Successfully!</h3>
            <p>Your ${packType} Roblox Pack is ready for download</p>
            <button class="download-button" onclick="startDownload('${packType}')">
                ⬇️ DOWNLOAD NEON CHARACTERS PACK
            </button>
            <p class="small-note">Thank you for completing your task!</p>
        </div>
    `;
    document.querySelector('.buttons-container').insertAdjacentHTML('afterend', successHTML);
}

function startDownload(packType) {
    const downloadUrl = DOWNLOAD_URLS[packType];
    
    // فتح رابط Mediafire في نافذة جديدة
    window.open(downloadUrl, '_blank');
    
    // رسالة تأكيد
    alert('📦 Neon Characters Pack download started! Thank you for using our service!');
}

// التحقق من إكمال المهمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    checkTaskCompletion();
    
    // Add hover effects
    const previewItems = document.querySelectorAll('.preview-item');
    previewItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

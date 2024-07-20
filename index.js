document.addEventListener('DOMContentLoaded', function() {
    const urls = [
        'https://www.baidu.com',
        'https://mwcy.net',
        // 其他URL...
    ];

    const domainList = document.querySelector('.domain');
    urls.forEach((url, index) => {
        const domainItem = document.createElement('div');
        domainItem.className = 'domain-status';

        const name = document.createElement('span');
        name.className = 'name';
        name.textContent = new URL(url).hostname;

        const status = document.createElement('span');
        status.className = 'status';
        status.textContent = '检测中...';

        const link = document.createElement('a');
        link.className = 'link';
        link.textContent = '访问';
        link.style.display = 'none';
        link.href = '#';

        domainItem.appendChild(name);
        domainItem.appendChild(status);
        domainItem.appendChild(link);
        domainList.appendChild(domainItem);

        fetch(url)
            .then(response => {
                if (response.ok) {
                    status.textContent = 'Connection Success';
                    status.classList.add('success');
                    link.style.display = 'inline-block';
                    link.href = url;
                } else {
                    status.textContent = 'Connection Failed';
                    status.classList.add('failure');
                }
            })
            .catch(() => {
                status.textContent = 'Connection Failed';
                status.classList.add('failure');
            });
    });
});
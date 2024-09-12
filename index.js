document.addEventListener('DOMContentLoaded', function() {
    const urls = [
        'https://anime.mwcy.net',
        'https://dm1.mwcy.net',
        ''
    ];

    const domainList = document.querySelector('.domain');


    urls.forEach((url, index) => {

        const domainItem = document.createElement('div');

        domainItem.className = 'domain-status';


        const name = document.createElement('span');

        name.className = 'name';

        name.textContent = new URL(url).hostname;


        const statusAndLinkContainer = document.createElement('div');

        statusAndLinkContainer.className = 'status-and-link';


        const status = document.createElement('span');

        status.className = 'status';

        status.textContent = '检测中...';


        const link = document.createElement('a');

        link.className = 'link';

        link.textContent = '访问';

        link.style.display = 'none';

        link.href = '#';


        statusAndLinkContainer.appendChild(status);

        statusAndLinkContainer.appendChild(link);

        domainItem.appendChild(name);

        domainItem.appendChild(statusAndLinkContainer);

        domainList.appendChild(domainItem);


        fetch(url, { mode: 'no-cors' })

            .then(() => {

                status.textContent = '连接成功';

                domainItem.classList.add('success');

                domainItem.classList.remove('failure');

                link.style.display = 'inline-block';

                link.href = url;

            })

            .catch(() => {

                status.textContent = '无法访问';

                domainItem.classList.add('failure');

                domainItem.classList.remove('success');

            });

    });

});

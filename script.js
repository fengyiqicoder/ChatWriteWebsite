$(document).ready(function() {
    // 当文档加载完成后，聚焦到textarea
    $('.textInput').focus();

    // 实时统计字数
    $('textarea[placeholder="Start Writing Here"]').on('input', function() {
        var count = $(this).val().length;
        $('.character-count').text(count + '/200');
    });

    // 当用户点击发送按钮时，创建新的chat-bubble
    $('button:has(.fa-paper-plane)').on('click', function() {
        var textarea = $('textarea[placeholder="Start Writing Here"]');
        var message = textarea.val().trim();
        if (message) {
            // 创建新的chat-bubble
            var newBubble = $('<div class="chat-bubble mb-8">' +
                                '<span>' + message + '</span>' +
                                '<button class="absolute top-0 right-0 mt-2 mr-2 text-white text-sm">' +
                                    '<i class="fas fa-times"></i>' +
                                '</button>' +
                              '</div>');

            // 添加删除chat-bubble的事件
            newBubble.find('button').on('click', function() {
                $(this).parent().remove();
            });

            // 将新的chat-bubble添加到消息列表
            $('.flex-grow').append(newBubble);

            // 清空textarea
            textarea.val('');

            // 重置字数统计
            $('.character-count').text('0/200');

            // 滚动到最新消息
            $('.flex-grow').scrollTop($('.flex-grow')[0].scrollHeight);
        }
    });

    // 点击删除按钮时删除chat-bubble
    $('.chat-bubble button').on('click', function() {
        $(this).parent().remove();
    });
});
